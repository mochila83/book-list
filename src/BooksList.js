import React from 'react';

export default function BooksList({ books }) {
    const emptyMessage = (
        <p>There are no books yet in your collection</p>
    );

    const booksList = (
        <p>books list</p>
    );

    return (
        <div>
            {books.length === 0 ? emptyMessage: booksList }
        </div>

    );
}

BooksList.propTypes = {
    books: React.PropTypes.array.isRequired
}