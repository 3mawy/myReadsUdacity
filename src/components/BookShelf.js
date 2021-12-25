import React from 'react';
import ShelfTitle from "./ShelfTitle";
import Book from "./Book";

const BookShelf = ({title, books, shelf, handleUpdateShelf}) => {
   const showingBooks = books && Object.values(books).filter(value => (value.shelf === shelf));


    return (
        <div className="bookshelf">
            <ShelfTitle title={title}/>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {showingBooks && Object.entries(showingBooks).map(([key, value]) => (
                        <Book key={key} data={value} updateShelf={handleUpdateShelf}/>))}
                </ol>
            </div>
        </div>
    )
}
export default BookShelf;