import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

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
      theme:'neo',
      lineWrapping:false
  };

export default class CodeDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      codeControlWidth:100
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

  shouldComponentUpdate(nextProps){
    if(this.state.open!=nextProps.sidebar){
      // this.setState({animate:true})
    }
   return this.props.value==nextProps.value;
  }

  render() {
    const left = window.innerWidth*this.props.left;
    const pointerEvents = this.props.transparency > 0.1 ? 'all':'none';
    const delay = !this.state.open ? '0ms' : '250ms';
    return (


<div style={{pointerEvents, transitionDelay:this.state.open?'0ms':'450ms',opacity:this.state.open ? 1:0}}>
          <Drawer
          width= {window.innerWidth-left}
          openSecondary={true}
          open={this.state.open}
          zDepth={1}
          containerStyle={{
            background:'rgba(0,0,0,0)',
            transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)',
            transition: this.props.animate ? 'all 450ms': 'all 0ms',
            top:`${this.props.top*100}%`, height:`${100-this.props.top*100}%`, zIndex:3, zDepth:1,
          }}

          >
        <div style={{opacity:this.props.transparency, paddingTop:`30px`, paddingRight:'120px',backgroundColor:'rgb(255,255,255)'}}>
          <div className='exampleText'>{this.props.pathname}</div>
          <br/>
        <Codemirror ref="editor"
          value={this.props.value} onChange={this.props.updateCode} options={options} interact={this.props.interact}
          lineWrapping={true}
          />
    </div>

      </Drawer>
      <Drawer
        width={this.state.codeControlWidth+15}
        openSecondary={true}
        open={this.state.open}
        zDepth={1}
        containerStyle={{
          background:'rgba(0,0,0,0)',
          transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)',
          transitionDelay:delay,
          transition: 'all 450ms',
          top:`${this.props.top*100}%`,
          height:`${100-this.props.top*100}%`,
          zIndex:4,
          overflow:'hidden',
          pointerEvents:'none'
        }}
      >
      <div style={{pointerEvents:'none', width:this.state.codeControlWidth, marginTop:'50px', position:'fixed !important'}}>
        <ButtonUpdate refresh={this.props.refresh}/>
        <br/>
        <div className='standard' style={{margin:'auto', textAlign:'center',width:this.state.codeControlWidth}}>Update</div>
        <SliderTransparency update={this.props.cbTransparency} transparency={this.props.transparency}/>
        <br/>
        <div className='standard' style={{margin:'auto', textAlign:'center',width:this.state.codeControlWidth}}>Opacity</div>
      </div>
    </Drawer>
    </div>

    );
  }
}
