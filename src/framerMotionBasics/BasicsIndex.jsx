import React from 'react';
import "./styles.css"
import BoxOne from "./components/BoxOne.jsx";
import BoxTwo from './components/BoxTwo';
import BoxThree from './components/BoxThree';
import BoxFour from './components/BoxFour';
import BoxFive from './components/BoxFive';


function BasicsIndex(props) {
    return (
        <>
        <BoxOne/>
        <BoxTwo/>
        <BoxThree/>
        <BoxFour/>
        <BoxFive/>
        </>
    );
}

export default BasicsIndex;