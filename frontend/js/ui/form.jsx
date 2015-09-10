import React from 'react';

import Input from '../ui/input.jsx';
import StateStore from '../stores/statestore.js';

class Form extends React.Component {
    constructor (props) {
        super(props);
    }

    _onSubmit (event) {
        event.preventDefault();
        var input = this.refs.input.state.input;
        StateStore.emit('update', {
            query: input
        });
    }

    render () {
        return (
            <form onSubmit={this._onSubmit.bind(this)}>
                <Input ref="input" />
            </form>
        );
    }
}

Form.displayName = 'Form';

Form.propTypes = {};

export default Form;
