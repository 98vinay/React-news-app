import React from 'react';
import {connect} from 'react-redux';

import {Navigate} from 'react-router'
class DetailPage extends React.Component {
    state = {
        navigateUser: false,
    }
    componentDidMount() {
        (Object.keys(this.props.article).length === 0)  && this.setState({
            navigateUser: true
        })
    }

    render() {
        return(
            this.state.navigateUser ? <Navigate to="/" /> :
            (<article className='newsarticle'>
                <h2 className='newsarticle__title'>{this.props.article.title}</h2>
                <div className='newsarticle__img-container'>
                    <img src={this.props.article.urlToImage} alt='article-pic' />
                    <ul>
                        <li>
                            <i className='fas fa-user'> </i>{this.props.article.author} 
                        </li>
                        <li>
                            <i className='fas fa-clock'></i>{this.props.article.publishedAt}</li>
                    </ul>
                </div>
                <div className='newsarticle__desc'>
                    <p>{this.props.article.description}</p>
                    <p>{this.props.article.content}</p>
                </div>
                <div className='newsarticle__controls'>
                    <a href={this.props.article.url} target="_blank" rel='noreferrer'>Read More</a>
                </div>
            </article>)
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        article: state.detailsPage.storedArticle
    }
}
export default connect(mapStateToProps, null)(DetailPage);