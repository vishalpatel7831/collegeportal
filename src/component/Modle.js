import React from 'react';
import {ContextProvider} from "../global/Context";

const Modle = () => {
    const {model}=React.useContext(ContextProvider);
    return 
        <>
        {model ? <div className="model"></div> :""}</>;
        
};

export default Modle;
