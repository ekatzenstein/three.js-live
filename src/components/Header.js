import React from 'react';
import AppBar from 'material-ui/AppBar';



import Switch from './Switch';
import SliderTransparency from './SliderTransparency';
import ButtonUpdate from './ButtonUpdate';

import 'bootstrap/dist/css/bootstrap.css'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = (props) => (
  <AppBar
    showMenuIconButton={false}
    title={<span className='sidebarTitle'><a href="https://threejs.org/" target="_blank">three.js</a> <span style={{color:'black'}}> / live</span></span>}
    titleStyle={{color:'black'}}
    zDepth={3}
    style={{backgroundColor:'white', minHeight:`${props.height}px`, zIndex:5}}
    iconElementRight={
      <tbody style={{minHeight:`${props.height}px`}}>
        <tr>
          <td className='header' style ={{paddingLeft:'5%',paddingRight:'5%', paddingTop:'28px',paddingBottom:'20px'}}>
            <Switch toggle = {props.sbToggle} open = {props.sb} title={'Examples'}/>
          </td>
          <td className='header' style ={{paddingRight:'60px', paddingTop:'28px',paddingBottom:'20px'}}>
            <Switch toggle = {props.cbToggle} open = {props.cb} title={'Code'}/>
          </td>
        </tr>
      </tbody>
    }
  />
);

export default Header;
