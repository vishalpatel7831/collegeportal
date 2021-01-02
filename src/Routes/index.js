import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Profile from "../component/Profile";

export const Routes = () => {
    return (
           <switch>
               <Route path="/" component={Profile}/>
           </switch>
         )
}

