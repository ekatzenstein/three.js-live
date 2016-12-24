import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import ExampleList from './ExampleList';
import ExampleSearch from './ExampleSearch';


export default class DrawerOpenRightExample extends React.Component {

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
    return (
      <div>
        <RaisedButton label="Toggle Drawer" onClick={this._handleToggle}/>
          <Drawer
          className='sidebar'
          width={window.innerWidth*.45}
          openSecondary={false}
          open={this.state.open}
          overlayStyle={{fontSize:'20px'}}>
          {//<AppBar title="AppBar" />
        }

          <RaisedButton label="Toggle Drawer" onClick={this._handleToggle}/>
          <ExampleSearch search={this.props.search}/>
          <ExampleList files={this.props.files} search={this.props.searchVal}/>
        </Drawer>
      </div>
    );
  }
}
