import React from 'react';
import { Route } from 'react-router-dom';
import { Start, Seat, Lab1, Lab2, Self1, Self2, Creative, Check} from './pages';

const Router = () => {
    return(
        <>
            <Route exact path="/" component={Start} />
            <Route path="/seat" component={Seat} />
            <Route path="/lab1" component={Lab1} />
            <Route path="/lab2" component={Lab2} />
            <Route path="/self1" component={Self1} />
            <Route path="/self2" component={Self2} />
            <Route path="/creative" component={Creative} />
            <Route path="/check" component={Check} />
           
        </>
    );
}


export default Router;