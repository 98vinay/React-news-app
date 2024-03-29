import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index'
import Article from './Article/Article';
import {useNavigate} from 'react-router-dom'

function ArticlesList(props) {
    const navigate = useNavigate();
    const {articleName , onLoad, articles} = props;
    const articlePulled = articles[articleName].length;
    useEffect(()=> {
        articlePulled === 0 && onLoad(articleName)
    },[articleName,onLoad , articlePulled]);
    
    const handleArticleClick = (data) => {
        props.openArticle(data);
        navigate("/details");    
    }

    const articleListMap = (
        articles[articleName].map((ele,index) => {
            return (
                <Article item = {ele} key={ele + index} handleClick= {() => handleArticleClick(ele)}/>
            )
        })
    )
    return (
        <div className='articles-container'>
            {articleListMap.length > 0 && articleListMap}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        articles:state.fetchItems.articles
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLoad: (articleName)=> dispatch(actions.fetchNewsInit(articleName)),
      openArticle: (article) => dispatch(actions.storeArticle(article))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ArticlesList);