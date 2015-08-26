import React from 'react';

import FormUI from '../ui/form.jsx';
import ListUI from '../ui/list.jsx';

class MainUI extends React.Component {
    constructror (props) {
        super(props);
        this.displayName = 'MainUI';
    }
    render () {
        return (
            <div className="tassel-main">
                <FormUI />
                <ListUI />
            </div>
        );
    }
}

MainUI.propTypes = {
};

export default MainUI;
