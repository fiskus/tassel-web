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
    _onPaste (event) {
        Actions.onKeyPress({
            which: null,
            value: event.currentTarget.value
        });
    }
    render () {
        return (
            <div className="input-wrapper">
                <input className="main-input"
                       ref="input"
                       type="text"
                       placeholder="Input URL to save or keyword to search"
                       onKeyDown={this._onKeyPress}
                       onPaste={this._onPaste}
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
