import React from 'react'
import CardItem from './CardItem'
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
        <CardItem item={item}/>
        <CardItem item={item}/>
        <CardItem item={item}/>
        <CardItem item={item}/>
        <CardItem item={item}/>
        <CardItem item={item}/>
    </div>
  )
}

export default MainBody