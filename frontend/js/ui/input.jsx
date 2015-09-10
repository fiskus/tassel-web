import React from 'react';

import StateStore from '../stores/statestore.js';

let inputCache = ''

class Input extends React.Component {
    constructror (props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    _onInput (event) {
        let value = event.currentTarget.value;
        if (inputCache === value) {
            return;
        }
        inputCache = value;
        var update = {
            input: value
        }
        this.setState(update);
        StateStore.emit('update', update);
    }

    render () {
        return (
            <div className="input-wrapper">
                <input className="main-input"
                       placeholder="Input URL to save or keyword to search"
                       onKeyUp={this._onInput.bind(this)}
                       onPaste={this._onInput.bind(this)}
                />
            </div>
        );
    }
}

Input.displayName = 'Input';

Input.propTypes = {};

export default Input;
