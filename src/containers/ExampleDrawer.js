import React from 'react';
import Drawer from 'material-ui/Drawer';

import ExampleList from '../components/ExampleList';
import ExampleSearch from '../components/ExampleSearch';

const style = (props) => (
  {
    drawerContainerStyle: {
      position: 'absolute',
      top: `${props.hh}px`,
      height: `calc(100% - ${props.hh}px)`,
      zIndex:5,
      transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)',
      transition: props.animate ? 'all 450ms': 'all 0ms',
    }
  }
)
export default class ExampleDrawer extends React.Component {

  render() {
    const left = window.innerWidth*this.props.left;
    const sbW = Math.max(left,200);
    const maxW = window.innerWidth < 800 ? window.innerWidth : sbW;
    const styles = style(this.props);

    return (
      <div>
          <Drawer
          className='sidebar'
          width={maxW}
          openSecondary={false}
          open={this.props.open}
          overlayStyle={{fontSize:'20px'}}
          containerStyle={styles.drawerContainerStyle}
          zDepth={0}
          >
            <ExampleSearch search={this.props.search}/>
            <ExampleList files={this.props.files} search={this.props.searchVal}/>
        </Drawer>
      </div>
    );
  }
}
