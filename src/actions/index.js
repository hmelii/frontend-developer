import {ADD_BOOK, EDIT_BOOK} from './../constants';

export const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload,
        generateId: true
    }
};

export const editBook = (payload) => {
    return {
        type: EDIT_BOOK,
        payload
    }
};


