import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import {remap} from '../util/num';

import * as d3 from 'd3';

import ExampleList from './ExampleList';
import ExampleSearch from './ExampleSearch';
import SliderTransparency from './SliderTransparency';
import ButtonUpdate from './ButtonUpdate';

import Codemirror from 'react-codemirror';
import 'codemirror/theme/neo.css'

require('codemirror/lib/codemirror.css'); //css install for code editor
require('codemirror/mode/htmlmixed/htmlmixed');

const options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'htmlmixed',
      theme:'neo'
  };

export default class CodeDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
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



          <Drawer
          className='sidebar'
          width={window.innerWidth-left}
          openSecondary={true}
          open={this.state.open}
          overlayStyle={{fontSize:'20px'}}
          containerStyle={{
            background:'rgba(0,0,0,0)',
            transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)',
            transition: 'all 450ms',
            position: 'absolute',top:`${this.props.top*100}%`, height:`${100-this.props.top*100}%`, zIndex:3, zDepth:1}}
          zDepth={1}
          >
          <AppBar
            showMenuIconButton={false}
            titleStyle={{color:'black'}}
            zDepth={1}
            style={{backgroundColor:'white', minHeight:`${this.props.top}px`, zIndex:5}}
            iconElementRight={
                <tbody style={{minHeight:`${this.props.top}px`}}>
                  <tr>
                    <td style={{color:d3.interpolate({colors: ["gray"]}, {colors: ["#2194CE"]})(this.props.transparency).colors[0]}}>
                      <span>Code Transparency &nbsp;&nbsp;</span>
                    </td>
                    <td style={{width:'200px', paddingRight:'60px'}}>
                      <SliderTransparency update={this.props.cbTransparency} default={this.props.transparency}/>
                    </td>
                    <td style={{color:d3.interpolate({colors: ["gray"]}, {colors: ["#2194CE"]})(this.props.transparency).colors[0]}}>
                      <span>Update Code &nbsp;&nbsp;</span>
                    </td>
                    <td style={{}}>
                      <ButtonUpdate/>
                    </td>
                  </tr>
                </tbody>
            }
          >

        </AppBar>
        <div style={{opacity:remap(this.props.transparency,0,1,.25,1)}}>

        <Codemirror ref="editor"
          value={this.props.value} onChange={this.props.updateCode} options={options} interact={this.props.interact} style={{height:100}}/>
        </div>
      </Drawer>

    );
  }
}
