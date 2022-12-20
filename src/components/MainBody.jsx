import React from 'react'
import Card_item from './Card_item'
import "./MainBody.css"

function MainBody() {

    const item={
        name:"Favipravir 400mg(Fabiflu) Tablets",
        cost:1775,
        company_name:"Glenmark Pharmaceutical Limited",
        company_address:"Parvat Patiya, Suart, Gujrat"
    }
  return (
    <div className='main--body'>
        <Card_item item={item}/>
        <Card_item item={item}/>
        <Card_item item={item}/>
        <Card_item item={item}/>
        <Card_item item={item}/>
        <Card_item item={item}/>
    </div>
  )
}

export default MainBody