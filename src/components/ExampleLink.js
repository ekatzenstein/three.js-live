import React from 'react';
import {Link} from 'react-router';

function ExampleLink(props){
  const d = props.file;
  return(
     <Link to={d} className='link' key={d}>{d}</Link>
  )
}

export default ExampleLink;
