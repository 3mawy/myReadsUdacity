import React from 'react';

const Book = ({data, updateShelf}) => {
    const {title, authors, imageLinks, shelf='none'} = data;
    const ChangeShelf = (e) => {
        e.preventDefault();
        updateShelf(data, e.target.value)
        console.log(e.target.value)
    }
    return (
        <li >
            <div className="book">
                <div className="book-top">
                    {(imageLinks) && (
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLinks.smallThumbnail})`
                        }}/>
                    )}

                    <div className="book-shelf-changer">
                        <select defaultValue={shelf} onChange={ChangeShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option key="currentlyReading" value="currentlyReading">Currently Reading</option>
                            <option key="wantToRead" value="wantToRead">Want to Read</option>
                            <option key="read" value="read">Read</option>
                            <option key="none" value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}
export default Book;