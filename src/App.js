import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BooksPage from './BooksPage';
import BookForm from './BookForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
         <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
         <NavLink className="item" activeClassName="active" exact to="/books">Books</NavLink>
         <NavLink className="item" activeClassName="active" exact to="/books/new">Add New Book</NavLink>
        </div>
    
        <Route exact path="/books" component={BooksPage} />
        <Route path="/books/new" component={BookForm} />
        <Route path="/book/:_id" component={BookForm} />
      </div>
    );
  }
}

export default App;
