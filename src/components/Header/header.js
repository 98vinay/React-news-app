import React from 'react'
import Logo from '../Logo/logo';
function Header() {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Health',
            path: '/'
        },
        {
            name: 'Business',
            path: '/'
        },
        {
            name: 'Technology',
            path: '/'
        },
        {
            name: 'Sports',
            path: '/'
        },
    ]
    const navLinks = (
        links.map((ele)=> {
            return (
                <li key={ele.name}><a href={ele.path}>{ele.name}</a></li>
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