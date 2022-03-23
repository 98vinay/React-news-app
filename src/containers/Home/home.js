import React  from 'react';
import TopHeadline from '../../components/TopHeadline/topHeadine';
import Aux from '../../hoc/auxilary';

class Home extends React.Component{
    render() {
        return (
            <Aux>
                <TopHeadline articleName="health"/>
                <TopHeadline articleName="business" />
                <TopHeadline articleName="technology" />
                <TopHeadline articleName="sports" />
            </Aux>
        )
    }
}

export default Home;