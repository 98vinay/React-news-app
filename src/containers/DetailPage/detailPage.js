import React from 'react';
class DetailPage extends React.Component {
    state = {
        articeNews: {
            "author": "Jeff Legwold",
            "title": "Denver Broncos fire head coach Vic Fangio after second straight last-place finish - ESPN",
            "description": "The Broncos have fired head coach Vic Fangio after a third consecutive losing season and second straight last-place finish in the AFC West.",
            "url": "https://www.espn.com/nfl/story/_/id/33026519/denver-broncos-fire-head-coach-vic-fangio-second-straight-last-place-finish",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0105%2Fr958163_1296x729_16%2D9.jpg",
            "publishedAt": "2022-01-09T15:42:45Z",
            "content": "ENGLEWOOD, Colo. -- For the second time in four years, the Denver Broncos' ongoing postseason drought has cost the head coach his job.\r\nThe Broncos, after a 7-10 finish, fired Vic Fangio on Sunday as… [+5952 chars]"
            }
    }
    // componentDidMount() {
    //     const dataReceived = this.props.location?.state?.data;
    //     if(dataReceived) {
    //         this.setState({
    //             articeNews:dataReceived
    //         })
    //     }
    // }

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
                    <a href={this.state.articeNews.url} target="_blank">Read More</a>
                </div>
            </article>
        )
    }
}
export default DetailPage;