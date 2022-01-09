import React  from 'react';
import TopRibbon from "../../components/TopRibbon/topRibbon";
import Header from '../../components/Header/header';
import TopHeadline from '../../components/TopHeadline/topHeadine';

class Home extends React.Component{
    render() {
        return (
            <div>
                <TopRibbon />
                <Header />
                <main>
                    <TopHeadline name="health"/>
                    <TopHeadline name="business" />
                    <TopHeadline name="technology" />
                    <TopHeadline name="sports" />
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

export default Home;