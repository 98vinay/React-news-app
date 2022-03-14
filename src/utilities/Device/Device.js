import {useEffect, useState} from 'react';

function IsMobile () {
    const [width , setWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=> {
        window.addEventListener('resize',handleResize);
        return ()=> {
            window.removeEventListener('resize',handleResize);
        }
    },[])
    return(
     width < 768
    );
}

export default IsMobile;