import React from 'react';

class InputUI extends React.Component {
    constructror () {
        this.displayName = 'InputUI';
    }
    render () {
        return (
            <div className="input-wrapper">
                <input className="input"
                       ref="input"
                       type="text"
                       placeholder="Input URL to save or keyword to search"
                       onKeyPress={this.props.ON_KEY}
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
