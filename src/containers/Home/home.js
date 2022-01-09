import React  from 'react';
import TopHeadline from '../../components/TopHeadline/topHeadine';
import Aux from '../../hoc/auxilary';

class Home extends React.Component{
    render() {
        return (
            <Aux>
                <TopHeadline name="health"/>
                <TopHeadline name="business" />
                <TopHeadline name="technology" />
                <TopHeadline name="sports" />
            </Aux>
        )
    }
}

export default Home;