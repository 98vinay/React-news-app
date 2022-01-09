import React,{useState,useEffect} from 'react';
import SocialMedia from '../socialMedia/socialMedia'

function TopRibbon() {
    const [currDate,setCurrDate] = useState('');
    const socialMedia = [
        {
            href : 'https://www.facebook.com',
            class : 'fab fa-facebook'
        },
        {
            href : 'https://www.instagram.com',
            class : 'fab fa-instagram'
        },
        {
            href : 'https://www.twitter.com',
            class : 'fab fa-twitter'
        },
    ];
    const updateTime = () => {
        const date = new Date();
        let localDate = date.toDateString();
        let locTime = date.toLocaleTimeString();
        setCurrDate(localDate + ' | ' + locTime);   
    };
    useEffect(()=> {
        setInterval(() => {
            updateTime();
        }, 1000);
    },[]);
    const links = (
        socialMedia.map((ele) => {
            return <SocialMedia href={ele.href} class= {ele.class} />
        })
    );
    return (
        <div className='topribbon'>
            <div className='topribbon__time'>
                <p>{currDate}</p>
            </div>
            <ul className='topribbon__socialmedia'>
                     {links}
            </ul>
        </div>
    );
}

export default TopRibbon;