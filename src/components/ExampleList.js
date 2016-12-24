import React from 'react';

import ExampleLink from './ExampleLink';

function ExampleList(props){

  const searchParser = d =>{
    const searchArray = props.files[d].map(e=>{
      return e.indexOf(props.search) !== -1;
    })
    return [searchArray,searchArray.filter(el=>el)];
  }

  return(
    <div width='20%' style={{textAlign:'left'}}>
      {Object.keys(props.files).map(d=>{
        const searchArray = searchParser(d);
        return searchArray[1].length > 0 ? <div key={d} className = 'linkList'>{d}
          {searchArray[0].map((e,i)=>{
            const fileInfo = props.files[d][i];
            return e ? <ExampleLink key={fileInfo} file={fileInfo}/> : null;
            }
          )}
          </div> : null;
      })}
    <br/><br/>
    </div>
  )
}

export default ExampleList;
