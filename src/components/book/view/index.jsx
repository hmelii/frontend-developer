import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bookSelector} from "../../../selectors";
import FormBook from "./../form-book";
import {Redirect} from "react-router-dom";
import {Container} from 'react-bootstrap';
import {editBook} from './../../../actions';



class View extends Component {

    handleSubmit = (book) => {
        this.props.editBook(book);
    };

    render() {
        const {book} = this.props;
        return (
            !book
                ?
                <Redirect to="/error"/>
                :
                <Container className="col-md-6 col-sm-12">
                    <FormBook
                        type="edit"
                        book={book}
                        handleSubmit={this.handleSubmit}
                    />
                </Container>
        )
    }
}

View.propTypes = {
    book: PropTypes.object,
    editBook: PropTypes.func
};

View.defaultProps = {
    book: {},
    editBook: () => {}
};

export default connect(
    (state, props) => ({
        book: bookSelector(state, props) || null
    }),
    {
        editBook
    }
)(View);

