import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Default from './Default';

const Home = props => {
    return (
        <Switch>
            <Route path="/" component={Default} />


        </Switch>
    );

}

export default Home;