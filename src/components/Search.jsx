import React from 'react'
import "./Search.css"
import search_icon from "../assets/icons8-search.svg"
export default function Search() {
  return (
    <div className='search'>
        <img src={search_icon} alt="" />
        <input type="text" name="" id="" placeholder='Paracetamol' />
        <button>Search</button>
    </div>
  )
}
