import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: HomePageComponent, ...re}) => (
  
    <Route {...re} render={
        
        (props) => {
            return (localStorage.getItem('user')
                ? <HomePageComponent {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
        }} />
)