import React, {useEffect, useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home'
import Search from './components/Search'
import * as BooksAPI from "./BooksAPI";

const BooksApp = () => {

    const [books, setBooks] = useState({});
    useEffect(() => {
        getBooks()
    }, [])
    const handleUpdateShelf = (newData, shelf) => {
        console.log(newData + "zzzzzz")
        BooksAPI.update(newData, shelf).then(response => {
            newData.shelf = shelf
            setBooks((prevState => {
                console.log(books)
                return prevState.filter(book => book.id !== newData.id).concat(newData)

            }))
        })

    }
    const getBooks = () => {
        BooksAPI.getAll()
            .then((books) => setBooks(books))
    }

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <Home books={books}
                          handleUpdateShelf={handleUpdateShelf}/>}/>
                <Route exact path="/search" element={<Search books={books} handleUpdateShelf={handleUpdateShelf}/>}/>
            </Routes>
        </Router>
    )
}

export default BooksApp
