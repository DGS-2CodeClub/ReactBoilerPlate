/**
 * Created by Nicholas on 3/14/2018.
 */
import * as React from 'react';

class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {skillValue: '3', interestValue: '3', skillName: ''};

    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleChangeInterest = this.handleChangeInterest.bind(this);
    this.handleChangeSkillName = this.handleChangeSkillName.bind(this)
  }

  handleChangeSkill(event) {
    this.setState({skillValue: event.target.value});
  }

  handleChangeInterest(event) {
    this.setState({interestValue: event.target.value});
  }

  handleChangeSkillName(event) {
    this.setState({skillName: event.target.value});
  }

  render() {
    this.state.skillName = 'What do you do?'

    return (
      <div className = 'main'>
        <div className = 'top_buffer' />
        <div className = 'title'>
          WHAT VOODOO DO YOU DO?
        </div>
        <ul className = 'interest_input'>
          <li>
            <input
              className = 'skill_name_input'
              type = 'text'
              onChange = {this.handleChangeSkillName}
              value = {this.state.skillName}
              autofocus
            />

          </li>
          <li>
            <input
              className = 'big_slider'
              type = 'range'
              min = '1'
              max = '5'
              step = '1'
              onChange = {this.handleChangeSkill}
              value = {this.state.skillValue}
            />
          </li>
          <li>
            <input
              className = 'big_slider'
              type = 'range'
              min = '1'
              max = '5'
              step = '1'
              onChange = {this.handleChangeInterest}
              value = {this.state.interestValue}
            />

          </li>
        </ul>
        <div className = 'footer'>
          <input
            className = 'submit_button'
            type = 'submit'
            value = 'Submit'
          />
        </div>
      </div>
    )
  }
}

export default Interests