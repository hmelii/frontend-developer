import React, {Component, Fragment} from 'react';
import {Form, ButtonToolbar, Button, Alert} from 'react-bootstrap';
import StarRating from './../../star-rating';
import {MODEL_BOOK} from '../../../models/book'
import PropTypes from "prop-types";

class FormBook extends Component {

    state = {
        book: {},
        edit: null,
        validated: false,
        submited: false,
        errors: false
    };

    componentDidMount() {
        const {book, type} = this.props;

        if (!book.id) {
            Object.keys(MODEL_BOOK).map((key) => book[key] = { value: MODEL_BOOK[key].value});
        }

        this.setState({
            book: book,
            edit: type === 'add'
        });
    };


    formGroup = (key, {value}) => {
        const {edit} = this.state;

        const {type, label, required, pattern, maxLength, invalidFeedback} = MODEL_BOOK[key];

        return (
            type &&
            <Form.Group key={key} controlId={key}>
                <Form.Label>{label}</Form.Label>
                {
                    type === 'text' || type === 'image'
                        ?
                            <div>
                                <Form.Control
                                    type="text"
                                    readOnly={!edit}
                                    placeholder={label}
                                    required={required}
                                    value={value}
                                    pattern={pattern}
                                    maxLength={maxLength}
                                    onChange={(e) => this.handleChange(e, key)}
                                />
                                <div className="invalid-feedback">{invalidFeedback}</div>
                            </div>
                        :
                        type === 'textarea'
                            ?
                            <Form.Control
                                as={type}
                                rows={4}
                                readOnly={!edit}
                                placeholder={label}
                                required={required}
                                value={value}
                                onChange={(e) => this.handleChange(e, key)}
                            />
                            :
                            type === 'rating'
                                ?
                                <StarRating
                                    disabled={!edit}
                                    rating={value}
                                    id={key}
                                    onChange={this.handleChangeRating}
                                />
                                :
                                ''
                }
            </Form.Group>

        );
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const {handleSubmit, type} = this.props;
        const {book} = this.state;
        const form = event.currentTarget;

        this.setState({validated: true});

        if (form.checkValidity() === false) {
            this.setState({errors: true});
            return;
        }

        this.setState({
            validated: false,
            edit: type === 'add',
            submited: true,
            errors: false
        });

        if (type === 'add') {
            this.setState({
                book: {...MODEL_BOOK}
            })
        }

        handleSubmit(book);
    };

    handleChange = ({target: {value}}, key) => {
        this.saveState(value, key);
    };

    saveState = (value, key) => {
        const {book} = this.state;
        this.setState({
            book: {
                ...book,
                [key]: {
                    ...book[key],
                    value
                }
            }
        });
    };

    handleChangeRating = (rating, key) => {
        this.saveState(rating, key);
    };

    handlerClickEditBook = () => {
        this.setState({
            edit: !this.state.edit
        })
    };

    formGroupButtonsEdit = () => (
        <ButtonToolbar className="py-3 justify-content-center">
            <Button variant="primary" className="m-3" onClick={this.handlerClickEditBook}>
                Редактировать книгу
            </Button>
            <Button disabled={!this.state.edit} type="submit" variant="success" className="m-3">
                Сохранить изменения
            </Button>
        </ButtonToolbar>
    );

    formGroupButtonsAdd = () => (
        <ButtonToolbar className="py-3 justify-content-center">
            <Button type="submit" variant="success" className="m-3">
                Добавить книгу
            </Button>
        </ButtonToolbar>
    );

    added = () => (
        this.state.submited &&
        <Alert variant="success">
            Книга добавлена
        </Alert>
    );

    edited = () => (
        this.state.submited &&
        <Alert variant="success">
            Книга отредактирована
        </Alert>
    );

    render() {
        const {type} = this.props;
        const {validated, book, errors} = this.state;
        return (
            <Fragment>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}>
                    {type === 'add' ? this.formGroupButtonsAdd() : this.formGroupButtonsEdit()}
                    {errors && <Alert variant="danger">Заполните все поля</Alert>}
                    {type === 'add' ? this.added() : this.edited()}
                    {Object.keys(book).map((key) => key !== 'id' && this.formGroup(key, book[key]))}
                </Form>
            </Fragment>
        )
    }
}

FormBook.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.shape({
            value: PropTypes.string
        }),
        cover: PropTypes.shape({
            value: PropTypes.string
        }),
        description: PropTypes.shape({
            value: PropTypes.string
        }),
        author: PropTypes.shape({
            value: PropTypes.string
        }),
        publisher: PropTypes.shape({
            value: PropTypes.string
        }),
        isbn: PropTypes.shape({
            value: PropTypes.string
        }),
        yearOfPublishing: PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        }),
        numberOfPage: PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        }),
        rating: PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        }),
        reviews: PropTypes.shape({
            value: PropTypes.string
        }),
        personalNotes: PropTypes.shape({
            value: PropTypes.string
        })

    }),
    type: PropTypes.string,
    handleSubmit: PropTypes.func
};

FormBook.defaultProps = {
    book: {},
    type: 'add',
    handleSubmit: () => {}
};

export default FormBook;