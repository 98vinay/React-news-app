import React from 'react';

function SocialMedia (props) {
    return (
        <li>
            <a href={props.href}>
                <i className={props.class}></i>
            </a> 
        </li>
    )
}

export default SocialMedia;