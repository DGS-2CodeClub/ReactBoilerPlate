/**
 * Created by Nicholas on 4/5/2018.
 */
import React from 'react';
import Card from "../node_modules/material-ui/Card/Card";

class UserInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', edipi: '', rank: '', squadron: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleFocusText = this.handleFocusText.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleFocusText(event) {
    if(this.state.firstName === 'First Name'){
      this.setState({firstName: ''})
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChangeName(event) {

    this.setState({firstName: event.target.value});
  }

  render(){
    return(
    <div>
      <Card>
        <ul className = 'interest_input'>
          <li>
            <input
              className = 'firstName'
              type = 'text'
              value = {this.state.firstName}
              onFocus = {this.handleFocusText}
              onChange = {this.handleChangeName}
            />
          </li>
          <li>
            <input
              className = 'laneName'
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
