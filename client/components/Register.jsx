import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (

      <div className="Register">
        <form action="/form" method="POST" id="form">
          <div>
            <p>
          Register
              <br /> Are you a jobseeker looking for work or an employer looking for a person?
            </p>
            <input type="radio" name="Employer" value="Employer"/> Employer
            <label htmlFor="Employer">Employer</label>
            <input type="radio" name="Jobseeker" value="Jobseeker"/>Jobseeker
            <label htmlFor="Jobseeker">Jobseeker</label>
            <button>Register Now</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register
