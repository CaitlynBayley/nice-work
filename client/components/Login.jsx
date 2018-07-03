import React from 'react'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="login">
        <form>
          <h3>Not Registered? <a href="/register">Click here</a></h3>
          <label htmlFor="uname">Username:</label>
          <input type="text" id="uname" name="name" placeholder="Username"
          />
          <label htmlFor="uname">Password:</label>
          <input type="text" id="uname" name="name" placeholder="Password"
          />
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
