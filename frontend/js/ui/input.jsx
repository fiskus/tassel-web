import React from 'react';

var InputUI = React.createClass({
    displayName: 'input',
    render () {
        return (
            <div className="input-wrapper">
                <input className="input"
                       type="text"
                       placeholder="Input URL to save or keyword to search"
                       onKeyPress={this.props.ON_KEY}
                       onPaste={this.props.ON_PASTE}
                />
            </div>
        );
    }
});

export default InputUI;
