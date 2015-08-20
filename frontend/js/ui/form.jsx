import React from 'react';

import InputUI from '../ui/input.jsx';

class FormUI extends React.Component {
    constructror () {
        this.displayName = 'FormUI';
    }
    _onSubmit (event) {
        event.preventDefault();
        var input = React.findDOMNode(this.refs.inputWrapper.refs.input);
        var value = input.value;
        this.props.ON_SUBMIT({value});
        input.blur();
    }
    render () {
        return (
            <form onSubmit={this._onSubmit.bind(this)}>
                <InputUI ref="inputWrapper"
                         ON_KEY={this.props.ON_KEY}
                         ON_PASTE={this.props.ON_PASTE} />
            </form>
        );
    }
}

FormUI.propTypes = {
    ON_SUBMIT: React.PropTypes.func
};

export default FormUI;
