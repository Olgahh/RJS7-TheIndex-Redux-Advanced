import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import BookTable from "./BookTable";

const AuthorDetail = ({ authors, books, match }) => {
  {
    const author = authors.find(author => author.id === +match.params.authorID);
    const authorName = `${author.first_name} ${author.last_name}`;

    const authorBooks = author.books.map(bookID =>
      books.find(book => book.id === bookID)
    );

    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={authorBooks} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    authors: state.authorsState.authors,
    books: state.booksState.books
  };
};
export default connect(mapStateToProps)(AuthorDetail);
