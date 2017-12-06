import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import BuildWindows from './components/BuildWindows';
import FetchData from './components/FetchData';
import Counter from './components/Counter';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
    <Route path='/buildWindows' component={ BuildWindows } />
</Layout>;
