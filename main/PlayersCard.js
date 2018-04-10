/**
 * Created by Nicholas on 4/5/2018.
 */
import React from 'react'
import Card from "../node_modules/material-ui/Card/Card";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";

class PlayersCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      edipi: '',
      rank: '',
      squadron: '',
      skillValue: '3',
      interestValue: '3',
      skillName: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render(){
    return(
      <div>
        <Card className = {['players_card', 'card']}>
          <ul className = {['interest_input', 'unordered_list']}>
            <li>
              <input
                className = 'firstName'
                type = 'text'
                value = {this.state.firstName}
                onChange = {this.handleChange}
              />
            </li>
            <li>
              <input
                className = 'lastName'
                type = 'text'
                value = 'Last Name'
              />
            </li>
            <li>
              <input
                className = 'edipi'
                type = 'text'
                value = 'EDIPI'
              />
            </li>
            <li>
              <Select
                className = 'rank'
                value = {this.state.rank}
                onChange = {this.handleChange}
              >
                <MenuItem value={1}>AB</MenuItem>
                <MenuItem value={2}>Amn</MenuItem>
                <MenuItem value={3}>A1C</MenuItem>
                <MenuItem value={4}>SSgt</MenuItem>
                <MenuItem value={5}>TSgt</MenuItem>
                <MenuItem value={6}>MSgt</MenuItem>
                <MenuItem value={7}>SMSgt</MenuItem>
                <MenuItem value={8}>CMSgt</MenuItem>
              </Select>
            </li>
            <li>
              <select
                className = 'squadron'
                value = {this.state.squadron}
                onChange = {this.handleChange}
              >
                <option value="thirsh">13 IS</option>
                <option value="forthish">48 IS</option>
                <option value="fithish">548 OSS</option>
                <option value="ninish">9 IS</option>
                <option value="groupish">548 ISRG</option>
              </select>
            </li>
          </ul>
        </Card>
      </div>
    )
  }
}
export default PlayersCard