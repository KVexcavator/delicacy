import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dishes from './Dishes/Dishes'
import Dish from './Dish/Dish'

const App = () => {
  return (
    <Switch>
        <Route exact path="/" component={Dishes} />
        <Route exact path="/dishes/:slug" component={Dish} />
    </Switch>
  )
}

export default App
