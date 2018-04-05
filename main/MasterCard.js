/**
 * Created by Nicholas on 4/5/2018.
 */

import React from 'react'
import Card from "../node_modules/material-ui/Card/Card";
import Interests from "./Interests";
import UserInfo from "./UserInfo";

class MasterCard extends React.Component{
  render(){
    return(
    <div>
      <Card>
        <Interests/>
        <UserInfo/>
      </Card>
    </div>
    )
  }
}

export default MasterCard