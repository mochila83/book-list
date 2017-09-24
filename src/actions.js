
export const SET_BOOKS = 'SET_BOOKS';

export function setBooks(books) {
    type: SET_BOOKS,
    books
}


 export function fetchBooks() {
    return dispatch => {
       fetch('/api/books')
       .then(res => res.json())
   }
 }

