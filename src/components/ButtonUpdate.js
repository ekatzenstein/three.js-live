import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/autorenew';
const style = {
  margin: 'auto',
  textAlign:'center',
  marginTop:'30px'
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = (props) => (
  <div style={style}>
    <FloatingActionButton  mini={true} zDepth={1} backgroundColor={"#2194CE"} style={{pointerEvents:'all'}} onClick={props.refresh}>
      <ContentAdd/>
    </FloatingActionButton>
    </div>
);

export default FloatingActionButtonExampleSimple;
