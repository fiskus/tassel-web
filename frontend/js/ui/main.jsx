import React from 'react';

import Form from '../ui/form.jsx';
import List from '../ui/list.jsx';

class Main extends React.Component {
    constructror (props) {
        super(props);
    }

    render () {
        return (
            <div className="tassel-main">
                <Form />
                <List bookmarks={this.props.bookmarks} />
            </div>
        );
    }
}

Main.displayName = 'Main';

Main.propTypes = {
};

export default Main;
