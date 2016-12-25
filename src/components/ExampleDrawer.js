import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import ExampleList from './ExampleList';
import ExampleSearch from './ExampleSearch';


export default class ExampleDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleToggle = (open) => {
    this.setState({open})
  };

  componentWillReceiveProps(nextProps){
    if(this.state.open!=nextProps.sidebar){
      this._handleToggle(nextProps.sidebar)
    }
  }

  render() {
    const left = window.innerWidth*this.props.left;
    return (
      <div>
          <Drawer
          className='sidebar'
          width={left}
          openSecondary={false}
          open={this.state.open}
          overlayStyle={{fontSize:'20px'}}
          containerStyle={{position: 'absolute', top: `${this.props.hh}px`, height: `calc(100% - ${this.props.hh}px)`, zIndex:4}}
          zDepth={2}
          >
          <ExampleSearch search={this.props.search}/>
          <ExampleList files={this.props.files} search={this.props.searchVal}/>
        </Drawer>
      </div>
    );
  }
}
