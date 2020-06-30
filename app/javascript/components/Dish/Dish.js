import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import RewiewForm from './RewiewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100ch;
  overflow: scroll;

  &: last-child {
    background:#000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

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

  const handleChange = (event) => {
    event.preventDefault()

    setRewiew(Object.assign({}, rewiew, {[event.target.name]: event.target.value}))

    console.log('rewiew:', rewiew)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const dish_id = dish.data.id
    axios.post('/api/v1/rewiews', {rewiew, dish_id})
      .then( resp => {
        const included = [...dish.included, resp.data]
        setDish({...dish, included})
        setRewiew({title: '', description: '', score: 0})
      } )
    .catch( resp => {} )
  }

  const setRating = (score, event) => {
    event.preventDefault()

    setRewiew({...rewiew, score})
  }

  return (
    <Wrapper>
      { 
        loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header 
                attributes = {dish.data}          
                rewiews = {dish.included}
              />
            </Main>
            <div className="rewiews"></div>
          </Column>
          <Column>
            <RewiewForm 
              setRating = {setRating}
              handleChange = {handleChange}
              handleSubmit = {handleSubmit}
              attributes = {dish.data}
              rewiew = {rewiew}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Dish
