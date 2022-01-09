import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';
function TopHeadline (props) {
    const {name} = props;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2468eac1ea8941819f11e76526b3dc83&category=${props.name}&pageSize=4`;
    const [articles,setArticles] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        axios.get(url).then((res)=>{
            const data = res.data;
            if(data.status === 'ok') {
                setArticles([...data.articles]);
            }
        })
    },[name,url])
    const getTime = (time)=> {
        const date = new Date(time);
        return date.toLocaleString();
    }
    const handleArticleClick = (data) => {
        navigate("/details",{
            state: data
        });
    }
    const articlesList= (
        articles.map((ele) => {
            const backgroundImage = `url("${ele.urlToImage}")`;
            return (
                <div key={ele.title} className='grid-article' style={{backgroundImage:backgroundImage}} onClick={()=>handleArticleClick(ele) }>
                    <div className='grid-article__desc'>
                        <h3>{ele.title}</h3>
                        <p className='details-author'>{ele.author ? ele.author:'Anonymous'}</p>
                        <p className='details-time'>{ele.publishedAt? getTime(ele.publishedAt):'N/A'}</p>
                    </div>
                </div>
            )
        })
    );
    return(
        <section className='news'>
            <div className='news__container'>
                <div className='news__header'>
                    <h2>{props.name}</h2>
                    <button>View More</button>
                </div>
                <div className='news__grid'>
                    {articles.length>0? articlesList:''}
                </div>
            </div>
        </section>
    );
}
export default TopHeadline;