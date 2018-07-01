import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Mission from './Mission'
import Login from './Login'
import Submit from './Submit'

import Employer from './Employer'
import Jobseeker from './Jobseeker'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <div className ='front'>
            <Route path ='/login' component={Header} />
            <Route path ='/login' component={Mission}/>
            <Route path ='/login' component={Login} />
            <Route path ='/login' component={Submit} />
          </div>
          <div className = 'employerPage'>
            <Route path ='/employer' component={Employer}/>
          </div>
          <div className = 'jobseeker'>
            <Route path = '/jobseeker' component={Jobseeker}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
