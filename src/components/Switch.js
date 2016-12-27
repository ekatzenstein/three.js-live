import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 0,
  },
  thumbOff: {
    backgroundColor: 'gray',
  },
  trackOff: {
    backgroundColor: 'lightgray',
  },
  thumbSwitched: {
    backgroundColor: '#2194CE',
  },
  trackSwitched: {
    backgroundColor: 'lightsteelblue',
  }
};

const Switch = (props) => {
const col = props.open?'#2194CE':'gray';
return(
  <div style={styles.block}>
    <Toggle
      className='standard'
      label={props.title}
      defaultToggled={props.open}
      thumbStyle={styles.thumbOff}
      trackStyle={styles.trackOff}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched}
      labelStyle={{fontFamily: "'inconsolata', monospace",fontSize:"18px", bottom:'2px',color: col, fontWeight:'normal'}}
      onToggle = {props.toggle}
    />
  </div>
)
};

export default Switch;
