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
    <label for="name">First name:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Last name:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Company name:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Location:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Contact person:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Their prefered pronouns:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Email:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Job title:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Job description:</label>
    <input type="text" name="name" id="name" required>
    <p>List 5 values represented in the workpace environment? </p>
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
    <label for="name">List some examples of how your values have been applied in previous workplace environments:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Job hours:</label>
    <input type="text" name="name" id="name" required>
    <label for="name">Job salary</label>
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