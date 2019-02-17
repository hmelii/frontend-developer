import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import FormBook from "./../form-book";
import {Container} from 'react-bootstrap';
import {addBook} from './../../../actions';

class Add extends Component {

    handleSubmit = (book) => {
        this.props.addBook(book);
    };

    render() {
        return (
            <Container className="col-md-6 col-sm-12">
                <FormBook
                    type="add"
                    handleSubmit={this.handleSubmit}
                />
            </Container>
        )
    }
}

Add.propTypes = {
    addBook: PropTypes.func
};

Add.defaultProps = {
    addBook: PropTypes.func
};

export default connect(
    null,
    {
        addBook
    }
)(Add);

