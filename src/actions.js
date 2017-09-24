
export const SET_BOOKS = 'SET_BOOKS';



 export function fetchBooks() {
    return dispatch => {
       fetch('/api/books')
       .then(res => res.json())
   }
 }

