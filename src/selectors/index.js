import { createSelector } from 'reselect';

export const booksMapSelector = state => state.books;

export const idSelector = (_, {match: {params: {id}}}) => +id;

export const bookSelector = createSelector(booksMapSelector, idSelector, (books, id) => books.find(book => book.id === id));
