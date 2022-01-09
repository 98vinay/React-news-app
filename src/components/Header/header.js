import React from 'react'
import Logo from '../Logo/logo';
import {NavLink} from 'react-router-dom';
function Header() {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Health',
            path: '/health'
        },
        {
            name: 'Business',
            path: '/business'
        },
        {
            name: 'Technology',
            path: '/technology'
        },
        {
            name: 'Sports',
            path: '/sports'
        },
    ]
    const navLinks = (
        links.map((ele)=> {
            return (
                <li key={ele.name}>
                    <NavLink to={ele.path}
                    className={status => {
                        if(status.isActive){
                            return 'activeLink';
                        }
                    } }
                    >{ele.name}</NavLink>
                </li>
            )
        }) 
    );
    return(
        <header className='header'>
            
            <Logo />
            <nav className='header__nav'>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        </header>
    )
}
export default Header;