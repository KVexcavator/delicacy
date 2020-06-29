import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

const Dish = (props) => {
  const [dish, setDish] = useState({})
  const [rewiew, setRewiew] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
   // console.log(props)
    const slug = props.match.params.slug
    const url = `/api/v1/dishes/${slug}`

    axios.get(url)
    .then(resp => {
      setDish(resp.data)
      setLoaded(true)
    })
    .catch(resp => console.log(resp))
  }, [])

  return (
    <div className="wrapper">
      <div className="column">
        { 
          loaded &&
          <Header 
            attributes = {dish.data}          
            rewiews = {dish.included}
          />
        }
        <div className="rewiews"></div>
      </div>
      <div className="column">
        <div className="rewiew-form">[Rewiew Form Goes Here]</div>
      </div>
    </div>
  )
}

export default Dish
