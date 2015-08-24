import React from 'react';
import Actions from '../actions.js';

class InputUI extends React.Component {
    constructror (props) {
        super(props);
        this.displayName = 'InputUI';
    }
    _onKeyPress (event) {
        Actions.onKeyPress({
            which: event.which,
            value: event.currentTarget.value
        });
    }
    render () {
        return (
            <div className="input-wrapper">
                <input className="input"
                       ref="input"
                       type="text"
                       placeholder="Input URL to save or keyword to search"
                       onKeyPress={this._onKeyPress}
                       onPaste={this.props.ON_PASTE}
                />
            </div>
        );
    }
}

InputUI.propTypes = {
    ON_KEY: React.PropTypes.func,
    ON_PASTE: React.PropTypes.func
};

export default InputUI;
