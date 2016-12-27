import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/autorenew';

const style={
  parentDivStyle:{
    margin: 'auto',
    textAlign:'center',
    marginTop:'30px'
  },
  fabStyle:{
    pointerEvents:'all'
  }
}

const FloatingActionButtonExampleSimple = (props) => (
  <div style={style.parentDivStyle}>
    <FloatingActionButton
      mini={true}
      zDepth={1}
      backgroundColor={"#2194CE"}
      style={style.fabStyle}
      onClick={props.refresh}
    >
      <ContentAdd/>
    </FloatingActionButton>
  </div>
);

export default FloatingActionButtonExampleSimple;
