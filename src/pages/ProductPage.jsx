import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { json, useParams } from 'react-router-dom'

function ProductPage() {

const { productID } = useParams()
const { product, setProduct } = useState({})


useEffect (() =>{
axios.get(`https://api-ninjas.com/api/cars`).then(json => setProduct(json.data))

}, []) 

  return (
    <>
    ProductPage
    </>
  )
}

export default ProductPage