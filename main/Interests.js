import React from 'react';
import Card from "../node_modules/material-ui/Card/Card";
import "./CSS/interest_styles.scss"
import TextField from "../node_modules/material-ui/TextField/TextField";
import Button from "material-ui/es/Button/Button";
import Grid from "material-ui/es/Grid/Grid";

class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {skillValue: '3', interestValue: '3', skillName: '', tableVisible: false};

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

  render(){
    return (
      <div>
        <Card className = {['interests_card', 'card']}>
          <Grid
            container
            justify = 'center'
            alignItems = 'center'
            direction = 'column'
          >
          <div className = 'title'>
            WHAT VOODOO DO YOU DO?
          </div>
          <ul>
            <li>
              <TextField
                className = 'skill_name_input'
                type = 'text'
                placeholder= "What's interests you?"
                onChange = {this.handleChangeSkillName}
                value = {this.state.skillName}
                autoFocus
                fullWidth = {true}
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

            <Button
              variant = 'raised'
              color = 'primary'
              className = 'submit_button'
              size = 'large'
            >Submit</Button>
          </ul>
            <Button
              varian = 'raised'
              color = 'primary'
              className = 'next_button'
            >Next
            </Button>
          </Grid>
        </Card>
      </div>
    );
  }
}
export default Interests;