import React from 'react';
import {Link} from 'react-router';

const HeaderTitle = (props) => (
  <span className='sidebarTitle'>
    <a href="https://threejs.org/" target="_blank">three.js</a>
    <span style={{color:'black'}}> /
      <Link to='/' style={{color:'black'}}> live</Link>
    </span>
  </span>
)

export default HeaderTitle;
