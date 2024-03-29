import React,{useEffect} from 'react';
import {useNavigate} from 'react-router';
import IsMobile from '../../utilities/Device/Device';
import { Carousel } from 'react-responsive-carousel';
import {connect} from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as actions from '../../store/actions/index';
import Loader from '../../utilities/Loader/Loader';
function TopHeadline (props) {
    const {articleName , onLoad, articles} = props;
    const navigate = useNavigate();
    const articlePulled = articles[articleName].length;
    useEffect(()=> {
        articlePulled === 0 && onLoad(articleName)
    },[articleName,onLoad , articlePulled])
    const getTime = (time)=> {
        const date = new Date(time);
        return date.toLocaleString();
    }
    const handleArticleClick = (data) => {
        props.openArticle(data);
        navigate("/details");    
    }
    const articlesList= (
        articles[articleName].slice(0,4).map((ele) => {
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
    
    const checkDevice = () => {
        if(IsMobile()) {
            return (
                <Carousel showArrows={false} showThumbs={false}>
                    {articlesList}
                </Carousel>
            );
        }
        else {
            return articlesList
        }
    }
    const list = checkDevice();
    return(
        <section className='news'>
            <div className='news__container'>
                <div className='news__header'>
                    <h2>{props.articleName}</h2>
                    <button>View More</button>
                </div>
                {props.loading ? <Loader /> : 
                (<div className='news__grid'>
                    {props.articles[articleName].length>0? list:''}
                </div>)}
            </div>
        </section>
    );
}
const mapStateToProps = (state) => {
    return {
        loading: state.fetchItems.loading,
        articles:state.fetchItems.articles
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLoad: (articleName)=> dispatch(actions.fetchNewsInit(articleName)),
      openArticle: (article) => dispatch(actions.storeArticle(article))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopHeadline);