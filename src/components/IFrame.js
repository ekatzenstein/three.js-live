import React from 'react';


const style=(props)=>({
  transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  transition: props.animateCode ? 'all 450ms' : 'all 0ms',
  width: `${ 100 *(1 - props.left)}%`,
  position: 'absolute',
  left: `${ 100 *props.left}%`,
  zIndex: 0,
  paddingTop: `${props.headerHeight+8}px`
})

class IFrame extends React.Component{
  render(){
    return(
      <iframe id="preview" height={`${100-100*(this.props.headerHeight)/window.innerHeight}%`} style={style(this.props)}/>
    )
  }
}

export default IFrame;
