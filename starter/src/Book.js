import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, onShelfChange }) => {
    const title = book.title;
    const author = book.authors ? book.authors.join(', ') : "";
    const url = book.imageLinks !== undefined && book.imageLinks.thumbnail !== undefined ? book.imageLinks.thumbnail : "";

    const changeShelf = e => onShelfChange(book, e.target.value);

    //TODO book shelf is not present for the books in the search page, so you'll have to find a way to set the value manually for each book in the search results.
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 180,
                        backgroundImage: url !== "" ? `url(${url})` : "",
                    }}
                ></div>

                <BookShelfChanger shelf={book.shelf} onShelfChange={changeShelf} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>);
};
export default Book;