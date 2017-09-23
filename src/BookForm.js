import React from 'react';

class BookForm extends React.Component {
    render() {
        return (
            <form classname="ui form">
                <h1>Add new book</h1>

                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        />
                  </div>

                  <div className="field">
                    <label htmlFor="cover">Cover URL</label>
                    <input
                        id="cover"
                        />
                  </div>


                  <div className="field">
                    <img src="" alt="cover" className="ui small bordered image"/>
                  </div>

                  <div className="field">
                      <button className="ui primary button">Save</button>
                </div>
             </form>
        );
    }
}

export default BookForm;