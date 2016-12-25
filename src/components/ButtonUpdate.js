import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/autorenew';

const style = {
  marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style} mini={true} zDepth={1} backgroundColor={"#2194CE"}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FloatingActionButtonExampleSimple;
