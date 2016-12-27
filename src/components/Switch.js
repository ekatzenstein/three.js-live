import React from 'react';
import Toggle from 'material-ui/Toggle';

const style = (props) => ({
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
  },
  labelStyle:{
    fontFamily: "'inconsolata', monospace",
    fontSize:"18px",
    bottom:'2px',
    color: props.open?'#2194CE':'gray',
    fontWeight:'normal'
  }
});

const Switch = (props) => {
  const styles = style(props);
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
        labelStyle={styles.labelStyle}
        onToggle={props.toggle}
      />
    </div>
  )
};

export default Switch;
