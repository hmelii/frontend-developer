import {ADD_BOOK, EDIT_BOOK} from './../constants';
import {DEFAULT_BOOKS} from './../store/books';
import {load} from 'redux-localstorage-simple';

let STORAGE = load({namespace: 'books'});

if (!STORAGE || !STORAGE.books || !STORAGE.books.length) {
    STORAGE.books = DEFAULT_BOOKS;
}

const books = (state = STORAGE.books, {type, payload}) => {
    switch (type) {
        case ADD_BOOK:
            return [payload, ...state];
        case EDIT_BOOK:
            return state.map(book => {
                if (book.id === payload.id) {
                    return { ...book, ...payload }
                }
                return book
            });
        default:
            return state;
    }
};

export default books;