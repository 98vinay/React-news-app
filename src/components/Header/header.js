import React,{useState} from 'react'
import Logo from '../Logo/logo';
import SideDrawer from '../SideDrawer/sideDrawer';
import Aux from '../../hoc/auxilary';
import {NavLink} from 'react-router-dom';
function Header() {
    const [showSideMenu,setSideMenu] = useState(false);
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
    const handleClick = () => {
        const curr = showSideMenu;
        setSideMenu(!curr);
    }
    return(
        <Aux>  
            <header className='header'>
                <Logo />
                <SideDrawer show={showSideMenu}>
                    <div className='sidedrawer__close-container'>
                        <div className='sidedrawer__close' onClick={handleClick}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <nav className='header__nav'>
                        <ul>
                            {navLinks}
                        </ul>
                    </nav>
                </SideDrawer>
                <div className='header__mob' onClick={handleClick}>
                    <i className="fas fa-bars header__mob-icon"></i>
                </div>
            </header>
        </Aux>
    )
}
export default Header;