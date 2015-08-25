import React from 'react';

import InputUI from '../ui/input.jsx';
import Actions from '../actions.js';

var FormUI = React.createClass({
    displayName: 'FormUI',
    _onSubmit (event) {
        event.preventDefault();
        var input = React.findDOMNode(this.refs.inputWrapper.refs.input);
        var value = input.value;
        input.blur();

        Actions.onSubmit({value});
    },
    render () {
        return (
            <form onSubmit={this._onSubmit}>
                <InputUI ref="inputWrapper" />
            </form>
        );
    }
});

FormUI.propTypes = {
    ON_SUBMIT: React.PropTypes.func
};

export default FormUI;
