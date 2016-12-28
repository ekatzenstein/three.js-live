import React from 'react';
import AppBar from 'material-ui/AppBar';

import HeaderTitle from './HeaderTitle';
import HeaderTools from './HeaderTools';

const Header = (props) => (
    <AppBar
        showMenuIconButton={false}
        title={<HeaderTitle/>}
        titleStyle={{color: 'black'}}
        zDepth={1}
        style={{backgroundColor: 'white', minHeight: `${props.height}px`, zIndex:6}}
        iconElementRight={
            <HeaderTools
                height={props.height}
                cbToggle={props.cbToggle}
                sbToggle={props.sbToggle}
                cb={props.cb}
                sb={props.sb}
            />
        }
    />
);

export default Header;
