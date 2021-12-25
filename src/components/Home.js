import React, {useEffect, useState} from 'react';
import SearchButton from "./SearchButton";
import BookShelf from "./BookShelf";
import * as BooksAPI from "../BooksAPI";

const Home = ({books, handleUpdateShelf}) => {



    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {<BookShelf books={books} title={'Currently Reading'} shelf={`currentlyReading`}
                                handleUpdateShelf={handleUpdateShelf}/>}
                    {<BookShelf books={books} title={'Want to Read'} shelf={`wantToRead`}
                                handleUpdateShelf={handleUpdateShelf}/>}
                    {<BookShelf books={books} title={'Read'} shelf={`read`} handleUpdateShelf={handleUpdateShelf}/>}
                </div>
            </div>
            <SearchButton/>
        </div>
    )
}
export default Home;