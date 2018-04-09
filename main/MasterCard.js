/**
 * Created by Nicholas on 4/5/2018.
 */

import React from 'react'
import Interests from "./Interests";
import UserInfo from "./UserInfo";
import PlayersCard from "./PlayersCard"
import Grid from "material-ui/es/Grid/Grid";

class MasterCard extends React.Component{

  render(){
    return(
      <div>
        <Grid
          container
          justify = 'center'
          alignItems = 'center'
          direction = 'column'
        >
          <Interests/>
          <UserInfo/>
          <PlayersCard/>
        </Grid>
      </div>
    )
  }
}

export default MasterCard