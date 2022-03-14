import React from 'react';

function SideDrawer(props) {
    let open = props.show? 'open' : 'close';
    let classes = ['sidedrawer', open];
    return(
        <div className={classes.join(" ")}>
            {props.children}
        </div>
    );
}

export default SideDrawer;