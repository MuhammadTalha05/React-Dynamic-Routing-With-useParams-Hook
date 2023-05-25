import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { db } from '../Database/db'


const DetailPage = () => {

  function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }

  const {slug} = useParams()
  // console.log(slug);
  const filterValue = db.find((val)=>{
    let title =  convertToSlug(val.title)
    return title===slug;
  })

  return (
    <div>
        <Header></Header>
        <p>Id Is: {filterValue.id}</p>
        <img src={filterValue.image} alt="" />
        <h3>{filterValue.title}</h3>
        <p>{filterValue.category}</p>



        
    </div>
  )
}

export default DetailPage