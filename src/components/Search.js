import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Book from "./Book";

const Search = ({handleUpdateShelf, books}) => {
    const [searchBooks, setSearchBooks] = useState([]);
    const [query, setQuery] = useState('');
    let booksWithoutShelf, booksWithShelf, filteredBooks

    useEffect(() => {
        if (query) {
            BooksAPI.search(query)
                .then(
                    (searchBooks) => {
                        if (searchBooks.error) {
                            setSearchBooks([])
                        } else {
                            booksWithShelf = Object.values(books).filter(o1 => searchBooks.some(o2 => o1.id === o2.id));
                            booksWithoutShelf = searchBooks.filter(o1 => !booksWithShelf.some(o2 => o1.id === o2.id));
                            filteredBooks = [...booksWithShelf, ...booksWithoutShelf]
                            setSearchBooks(filteredBooks)
                            console.log(filteredBooks)
                            console.log(searchBooks)
                        }
                    }
                )
        } else setSearchBooks([])
    }, [query, books])

    return (

        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">

                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input value={query} onChange={e => setQuery(e.target.value)} type="text"
                           placeholder="Search by title or author"/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks && searchBooks.map((book) => (
                        <Book key={book.id} data={book} updateShelf={handleUpdateShelf}/>))}
                </ol>
            </div>
        </div>

    )
}
export default Search;