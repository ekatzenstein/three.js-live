import React from 'react';

import Switch from './Switch';

const style={
  sb:{
      paddingLeft: '5%',
      paddingRight: '40px',
      paddingTop: '24px',
      paddingBottom: '24px'
  },
  cb:{
      paddingRight: '30px',
      paddingTop: '24px',
      paddingBottom: '24px'
  }
}

const HeaderTools = (props) => (
  <table>
      <tbody style={{minHeight: `${props.height}px`}}>
          <tr>
              <td className='header' style={style.sb}>
                <Switch toggle={props.sbToggle} open={props.sb} title={'Examples'}/>
              </td>
              <td className='header' style={style.cb}>
                <Switch toggle={props.cbToggle} open={props.cb} title={'Code'}/>
              </td>
          </tr>
      </tbody>
  </table>
)

export default HeaderTools;
