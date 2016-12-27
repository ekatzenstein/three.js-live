import React from 'react';
import Drawer from 'material-ui/Drawer';

import SliderTransparency from './SliderTransparency';
import ButtonUpdate from './ButtonUpdate';


const style=(props)=>(
  {
    drawerStyle:{
      background:'rgba(0,0,0,0)',
      transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)',
      transitionDelay:props.delay,
      transition: 'all 450ms',
      top:`${props.top*100}%`,
      height:`${100-props.top*100}%`,
      zIndex:4,
      overflow:'hidden',
      pointerEvents:'none'
    },
    toolbarStyle:{
      pointerEvents:'none',
      width:props.codeControlWidth,
      marginTop:'50px',
      position:'fixed !important'
    },
    buttonStyle:{
      margin:'auto',
      textAlign:'center',
      width:props.codeControlWidth
    },
    sliderStyle:{
      margin:'auto',
      textAlign:'center',
      width:props.codeControlWidth
    }
  }
)

const CodeBlockToolbar = (props) => {
  const styles = style(props);
  return(
    <Drawer
      width={props.codeControlWidth+15}
      openSecondary={true}
      open={props.open}
      zDepth={1}
      containerStyle={styles.drawerStyle}
    >
    <div style={styles.toolbarStyle}>
      <ButtonUpdate refresh={props.refresh}/>
      <br/>
      <div className='standard' style={styles.buttonStyle}>Update</div>
      <SliderTransparency update={props.cbTransparency} transparency={props.transparency}/>
      <br/>
      <div className='standard' style={styles.sliderStyle}>Opacity</div>
    </div>
  </Drawer>
)}

export default CodeBlockToolbar;
