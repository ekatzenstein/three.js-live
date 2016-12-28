import React from 'react';
import {Link} from 'react-router';

function ExampleLink(props){
  const d = props.file;
  return(
     <Link to={d} className='link' key={d}>{d.split('_').slice(1).join(' / ')}</Link>
  )
}

export default ExampleLink;
