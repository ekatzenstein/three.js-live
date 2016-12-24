import React from 'react';
import TextField from 'material-ui/TextField';


const styles = {
  underlineStyle: {
    borderColor: '#2194CE',
  },
  textStyle:{
    fontFamily: "'Inconsolata', monospace",
    fontSize:"18px",
    color:'#2194CE'
  },
  textHint:{
    fontFamily: "'Inconsolata', monospace",
    fontSize:"18px",
    color:'gray'
  }
};

function ExampleSearch(props){
  return(
    <div style={{textAlign:'left'}} className='sidebarTitle'>
      <TextField
          fullWidth = {true}
          hintText="search examples..."
          underlineFocusStyle={styles.underlineStyle}
          hintStyle={styles.textHint}
          style={styles.textStyle}
          onChange={props.search}
        />
    </div>
  )
}

export default ExampleSearch;
