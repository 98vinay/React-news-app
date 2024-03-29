import React from 'react';
function Article(props){
    const {item} = props;
    const backgroundImage = `url("${item.urlToImage}")`;
    const getTime = (time)=> {
        const date = new Date(time);
        return date.toLocaleString();
    }
    return(
        <div className='article__card' onClick={props.handleClick}>
            <div className='article__card-header'>
                <p><i className='fas fa-user'> </i><span dangerouslySetInnerHTML={{ __html: item.author ? item.author:'Anonymous' }}></span></p>
                <button><i className="fas fa-share"></i> Share</button>
            </div>
            <div className='article__card-image' style={{backgroundImage:backgroundImage}}>
            </div>
            <div className='article__card-description'>
                <p className='title' dangerouslySetInnerHTML={{ __html: item.title}} ></p>
                <p className='desc' dangerouslySetInnerHTML={{ __html:item.description}}></p>
            </div>
            <div className='article__card-footer'>
                <p><i className='fas fa-eye'></i><span>10</span></p>
                <p><i className='fas fa-clock'> </i><span>{item.publishedAt? getTime(item.publishedAt):'N/A'}</span></p>
            </div>
        </div>
    )
}

export default Article