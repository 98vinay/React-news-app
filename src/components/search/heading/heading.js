import React from 'react';

function Heading(props) {

    return (
        <div className='page-heading'>
            <h2>{props.heading?props.heading:'The Heading'}</h2>
        </div>
    );
}

export default Heading;