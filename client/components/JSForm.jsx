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
{/* <form action="" method="POST" class="form-example"> */}
    <label for="firstName">First name:</label>
    <input type="text" name="name" id="name" required>
    <label for="lastName">Last name:</label>
    <input type="text" name="name" id="name" required>
    <label for="location">Location:</label>
    <input type="text" name="name" id="name" required>
    <label for="pronouns">Preferred Pronouns:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Email:</label>
    <label for="name">Personal Intro</label>
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