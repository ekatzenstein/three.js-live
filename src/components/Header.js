import React from 'react';
import AppBar from 'material-ui/AppBar';

import {Link} from 'react-router';

import Switch from './Switch';
import SliderTransparency from './SliderTransparency';
import ButtonUpdate from './ButtonUpdate';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = (props) => (
  <AppBar
    showMenuIconButton={false}
    title={<span className='sidebarTitle'><a href="https://threejs.org/" target="_blank">three.js</a> <span style={{color:'black'}}>
    / <Link to='/' style={{color:'black'}}>live</Link></span></span>}
    titleStyle={{color:'black'}}
    zDepth={3}
    style={{backgroundColor:'white', minHeight:`${props.height}px`, zIndex:6}}
    iconElementRight={
      <table>
      <tbody style={{minHeight:`${props.height}px`}}>
        <tr>
          <td className='header' style ={{paddingLeft:'5%',paddingRight:'40px', paddingTop:'24px',paddingBottom:'24px'}}>
            <Switch toggle = {props.sbToggle} open = {props.sb} title={'Examples'}/>
          </td>
          <td className='header' style ={{paddingRight:'30px', paddingTop:'24px',paddingBottom:'24px'}}>
            <Switch toggle = {props.cbToggle} open = {props.cb} title={'Code'}/>
          </td>
        </tr>
      </tbody>
    </table>
    }
  />
);

export default Header;
