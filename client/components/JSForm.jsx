import React from 'react'


class JSForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="JSForm">  
        <form action="/register" method="post"> 
          <p>
            <label>Personal Information</label>
              <label>Username:</label>
              <input type="text" name="userName">
              <label>First name:</label>
              <input type="text" name="firstName">
              <label>Last name:</label>
              <input type="text" name="lastName">
              <label for="location">Location:</label>
              <input type="text" name="name" id="name" required>
              <label for="pronouns">Preferred Pronouns:</label>
              <input type="text" name="name" id="name" required>
              <label for="name">Email:</label>
          </p>
          <label for="name">Introduction:</label>
          <input type="text" name="name" id="name" required>
          <p>List 5 values that are important to you in a workplace environment</p>
          <input type="text" name="name" id="name" required>
          <label for="name">Value 1:</label>
          <input type="text" name="name" id="name" required>
          <label for="name">Value 2:</label>
          <input type="text" name="name" id="name" required>
          <label for="name">Value 3:</label>
          <input type="text" name="name" id="name" required>
          <label for="name">Value 4:</label>
          <input type="text" name="name" id="name" required>
          <label for="name">Value 5:</label>
          <input type="text" name="name" id="name" required>
          <label for="name">List some examples of how your values have been applied in previous workplace environments?</label>
          <input type="text" name="name" id="name" required>

  <div class="form-example">
    <input type="submit" value="Complete Registration">
  </div>
</form>
</div>
    )
    }
    }

export default JSForm