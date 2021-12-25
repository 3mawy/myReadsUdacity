import React from 'react';

const BookShelfChanger = ({ onChangeReadStatus}) => {
    const handleSelect = (e) => {
          e.preventDefault()

      onChangeReadStatus(e.target.value)

    }
    return (<></>

    )
}
export default BookShelfChanger;