import React from 'react';

import { useLocation } from 'react-router-dom';

export const  withNavigation = (Component) => {
    return props => <Component {...props} navigate={useLocation()} />;
  }
class DetailPage extends React.Component {
    state = {
        articeNews: {}
    }
    componentDidMount() {
        const dataReceived = this.props.navigate.state;
        if(dataReceived) {
            this.setState({
                articeNews:dataReceived
            })
        }
    }

    render() {
        return(
            <article className='newsarticle'>
                <h2 className='newsarticle__title'>{this.state.articeNews.title}</h2>
                <div className='newsarticle__img-container'>
                    <img src={this.state.articeNews.urlToImage} alt='article-pic' />
                    <ul>
                        <li>
                            <i className='fas fa-user'> </i>{this.state.articeNews.author} 
                        </li>
                        <li>
                            <i className='fas fa-clock'></i>{this.state.articeNews.publishedAt}</li>
                    </ul>
                </div>
                <div className='newsarticle__desc'>
                    <p>{this.state.articeNews.description}</p>
                    <p>{this.state.articeNews.content}</p>
                </div>
                <div className='newsarticle__controls'>
                    <a href={this.state.articeNews.url} target="_blank" rel='noreferrer'>Read More</a>
                </div>
            </article>
        )
    }
}
export default withNavigation(DetailPage);