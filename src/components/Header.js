import React from 'react';
import AppBar from 'material-ui/AppBar';

import Switch from './Switch';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = (props) => (
  <AppBar
    title={<span className = 'sidebarTitle'><a href="https://threejs.org/" target="_blank">three.js</a> / live</span>}
    iconElementRight={<Switch sbToggle = {props.sbToggle} sb = {props.sb}/>}
    showMenuIconButton={false}
    style={{backgroundColor:'white'}}
    titleStyle={{color:'black'}}
  >
  </AppBar>
);

export default Header;
