import React from 'react';

import CodeBlock from '../components/CodeBlock';
import CodeBlockToolbar from '../components/CodeBlockToolbar';

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
    if(this.state.open!==nextProps.sidebar){
      this._handleToggle(nextProps.sidebar)
    }
  }

  shouldComponentUpdate(nextProps){
    return this.props.value===nextProps.value;
  }

  render() {
    const left = window.innerWidth*this.props.left;
    const pointerEvents = this.props.transparency > 0.1 ? 'all':'none';
    const delay = !this.state.open ? '0ms' : '250ms';

    return (
      <div style={{pointerEvents, transitionDelay:this.state.open?'0ms':'450ms',opacity:this.state.open ? 1:0}}>
        <CodeBlock
          open={this.state.open}
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
          codeControlWidth={this.state.codeControlWidth}
          open={this.state.open}
          cbTransparency={this.props.cbTransparency}
        />
      </div>
    );
  }
}
