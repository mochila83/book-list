import React from 'react';
import BooksList from './BooksList';
import { connect } from 'react-redux';
import { fetchBooks } from './actions';



class BooksPage extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

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
    books: React.PropTypes.array.isRequired,
    fetchBooks: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, { fetchBooks })(BooksPage);