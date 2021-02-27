import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const {loading, products} = useFetch(url);
  
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      {products.map((product) => {
        const {id, fields} = product;
        return <>
        <h1 key={id}>{fields.company}</h1>
        </>
      })}
    </div>
  )
}

export default Example
