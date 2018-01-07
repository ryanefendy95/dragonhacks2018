import React from 'react';
import { Link } from 'react-router';

const NavBar = props =>{
  return(
    <div>
      <div id='header'>
        <div>
          <h3>WOW Chat</h3>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar;
