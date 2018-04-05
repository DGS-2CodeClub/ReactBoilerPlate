import React from 'react';
import Card from "../node_modules/material-ui/Card/Card";

class Interests extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Card className = 'card_main'>
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
                autoFocus
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
        </Card>
      </div>
    );
  }
}
export default Interests;