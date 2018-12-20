import React from 'react'
import EventsContainer from '../containers/EventsContainer'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={EventsContainer}>
      </Route>
    </Router>
  )
}

export default App
