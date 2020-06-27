import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Dishes = () => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    // Get all of our dishes from api
    // Update dishes in our state
    axios.get('/api/v1/dishes.json')
      .then( resp => {
        setDishes(resp.data.data )
      } )
    .catch( resp => console.log(resp) )
  }, [dishes.length])

  const list = dishes.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  } )

  return (
    <Fragment>
      <div>This is Dishes#index view for our app.</div>
      <ul>{list}</ul>
    </Fragment>
  )
}

export default Dishes
