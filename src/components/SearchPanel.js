import React from 'react';
import '../App.css'

export default function SearchPanel({searchItem, setSearchItem}) {
  return (
    <input
        className='search_input'
        type="text"
        placeholder='  Search by posts'
        value = {searchItem}
        onChange={(event) => (setSearchItem(event.target.value))}
    />
  )
}
