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
            <RewiewForm />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Dish
