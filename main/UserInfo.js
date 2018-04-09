/**
 * Created by Nicholas on 4/5/2018.
 */
import React from 'react';
import Card from "../node_modules/material-ui/Card/Card";
import TextField from "../node_modules/material-ui/TextField/TextField";

class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', edipi: '', rank: '', squadron: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);

    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEdipi = this.handleChangeEdipi.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChangeFirstName(event) {

  this.setState({firstName: event.target.value});
}
  handleChangeLastName(event) {

    this.setState({lastName: event.target.value});
  }
  handleChangeEdipi(event) {
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
            <select>
              <option value="airmenBasic">AB</option>
              <option value="airmen">Amn</option>
              <option value="airmenfirst">A1C</option>
              <option value="staffsgt">SSgt</option>
              <option value="techsgt">TSgt</option>
              <option value="mastersgt">MSgt</option>
              <option value="seniorsgt">SMSgt</option>
              <option value="chief">CMSgt</option>
            </select>
          </li>
          <li>
            <select>
              <option value="thirsh">13 IS</option>
              <option value="forthish">48 IS</option>
              <option value="fithish">548 OSS</option>
              <option value="ninish">9 IS</option>
              <option value="groupish">548 ISRG</option>
            </select>
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
