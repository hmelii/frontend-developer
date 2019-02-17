import React, {Component, Fragment} from 'react';
import List  from './../book/list';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Main extends Component {
    render() {
        const {books} = this.props;
        return (
            <Fragment>
                <List books={books} />
            </Fragment>
        )
    }
}

Main.propTypes = {
    books: PropTypes.array
};

Main.defaultProps = {
    books: []
};

export default connect(({books}) => ({books}))(Main);