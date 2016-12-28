import React from 'react';
import Drawer from 'material-ui/Drawer';

import Codemirror from 'react-codemirror';
import 'codemirror/theme/neo.css' //code mirror theme
import 'codemirror/lib/codemirror.css'; //css install for code editor
import 'codemirror/mode/htmlmixed/htmlmixed';

const options = {
      lineNumbers: true,
      readOnly: false,
      mode: 'htmlmixed',
      theme:'neo',
      lineWrapping:false
  };

export default class CodeBlock extends React.Component {
  //needed to be a component because of codemirror
  render(){
    const props = this.props;
    return(
      <Drawer
        width={window.innerWidth-props.left}
        openSecondary={true}
        open={props.open}
        zDepth={1}
        containerStyle={{
          background:'rgba(0,0,0,0)',
          transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)',
          transition: props.animate ? 'all 450ms': 'all 0ms',
          top:`${props.top*100}%`, height:`${100-props.top*100}%`, zIndex:3, zDepth:1,
        }}
      >
        <div style={{opacity:props.transparency, paddingTop:`30px`, paddingRight:'120px',backgroundColor:'rgb(255,255,255)'}}>
        <div className='exampleText'>{props.pathname === '/' ? '/home' : props.pathname}</div>
        <br/>
        <Codemirror
          ref="editor"
          value={props.value}
          onChange={props.updateCode}
          options={options}
        />
        </div>
      </Drawer>
    )
  }

}
