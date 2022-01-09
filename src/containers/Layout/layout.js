import React from 'react';
import Aux from '../../hoc/auxilary';
import Header from '../../components/Header/header';
import TopRibbon from '../../components/TopRibbon/topRibbon';
class Layout extends React.Component {
    render() {
        return(
            <Aux>
                <TopRibbon />
                <Header />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;