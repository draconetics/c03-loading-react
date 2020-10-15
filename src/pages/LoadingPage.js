import React from 'react';
import LoadingComponent from '../components/LoadingComponent';


const LoadingPage = ()=>{
    return(
        <div className="loading-page">
            <LoadingComponent></LoadingComponent>
            <h2>Loading ...</h2>
        </div>
        
    );
}

export default LoadingPage;