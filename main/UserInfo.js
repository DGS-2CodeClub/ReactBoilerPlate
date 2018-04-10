/**
 * Created by Nicholas on 4/5/2018.
 */
import React from 'react';
import Card from "../node_modules/material-ui/Card/Card";
import TextField from "../node_modules/material-ui/TextField/TextField";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";

class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', edipi: '', rank: '', squadron: ''};

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEdipi = this.handleChangeEdipi.bind(this);

  }

  handleChangeFirstName = (event) => {

  this.setState({firstName: event.target.value});
}
  handleChangeLastName = (event) =>{

    this.setState({lastName: event.target.value});
  }
  handleChangeEdipi = (event) => {
    alert(event.target.name)
    this.setState({edipi: event.target.value});
  }

  render(){
    return(
    <div>
      <Card className = {['user_info_card', 'card']}>
        <ul className = 'interest_input'>
          <li>
            <TextField
              className = 'firstName'
              type = 'text'
              placeholder= 'First Name'
              margin= 'normal'
              value = {this.state.firstName}
              onChange = {this.handleChangeFirstName}
            />
          </li>
          <li>
            <TextField
              margin= 'normal'
              placeholder= 'Last Name'
              className = 'laneName'
              onChange= {this.handleChangeLastName}
              value = {this.state.lastName}
            />
          </li>
          <li>
            <TextField
              margin= 'normal'
              placeholder= 'EDIPI'
              className = 'edipi'
              onChange={this.handleChangeEdipi}
              value = {this.state.edipi}
            />
          </li>
          <li>
            <Select
              className = 'rank'
              value = {this.state.rank}
            >
              <MenuItem value={10}>AB</MenuItem>
              <MenuItem value={20}>Amn</MenuItem>
              <MenuItem value={30}>A1C</MenuItem>
              <MenuItem value={4}>SSgt</MenuItem>
              <MenuItem value={5}>TSgt</MenuItem>
              <MenuItem value={6}>MSgt</MenuItem>
              <MenuItem value={7}>SMSgt</MenuItem>
              <MenuItem value={8}>CMSgt</MenuItem>
            </Select>
          </li>
          <li>
            <Select
              className = 'squadron'
              value = {this.state.rank}
            >
              <MenuItem value={13}>13 IS</MenuItem>
              <MenuItem value={48}>48 IS</MenuItem>
              <MenuItem value={548}>548 OSS</MenuItem>
              <MenuItem value={9}>9 IS</MenuItem>
              <MenuItem value={5482}>548 ISRG</MenuItem>
            </Select>
          </li>
          <li>
            <input className = 'submit'
                   value ='submit'
                   type = 'submit'
            />
          </li>

        </ul>
      </Card>
    </div>
    )
  }
}

export default UserInfo
