import React from 'react';
import { connect } from 'react-redux';
import BooksList from './BooksList';


class BooksPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Book List</h1>


                <BooksList books={this.props.books} />
            </div>
        );
    }
}

BooksPage.propTypes = {
    books: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BooksPage);