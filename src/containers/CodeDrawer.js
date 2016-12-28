import React from 'react';

import CodeBlock from '../components/CodeBlock';
import CodeBlockToolbar from '../components/CodeBlockToolbar';

const codeControlWidth=100;

export default class CodeDrawer extends React.Component {
  
  shouldComponentUpdate(nextProps){
    return this.props.value===nextProps.value;
  }

  render() {
    const left = window.innerWidth*this.props.left;
    const pointerEvents = this.props.transparency > 0.1 ? 'all':'none';
    const delay = !this.props.open ? '0ms' : '250ms';

    return (
      <div style={{pointerEvents, transitionDelay:this.props.open?'0ms':'450ms',opacity:this.props.open ? 1:0}}>
        <CodeBlock
          open={this.props.open}
          left={left}
          animate={this.props.animate}
          top={this.props.top}
          transparency={this.props.transparency}
          pathname={this.props.pathname}
          value={this.props.value}
          updateCode={this.props.updateCode}
        />
        <CodeBlockToolbar
          delay={delay}
          top={this.props.top}
          refresh={this.props.refresh}
          transparency={this.props.transparency}
          codeControlWidth={codeControlWidth}
          open={this.props.open}
          cbTransparency={this.props.cbTransparency}
        />
      </div>
    );
  }
}
