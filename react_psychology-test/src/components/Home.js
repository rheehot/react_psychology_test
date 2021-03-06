import React, { useState } from "react";
import Example from "./Example";
import Test from "./Test";
import Login from "./Login";

import FadeIn from 'react-fade-in';
import $ from 'jquery';

function Home({history}) {
    const [loginToken, setLoginToken] = useState(true);
    const [exampleToken, setExampleToken] = useState(false);
    const [testToken, setTestToken] = useState(false);

    //const [progress,setProgress] = useState("0");

    function loginToExample() {
        setLoginToken(false);
        setExampleToken(true);
        $(".example-container").fadeIn("linear");
    }
    function exampleToLogin() {
        setLoginToken(true);
        setExampleToken(false);
        $(".login-container").fadeIn("linear");
    }
    function exampleToTest() {
        setExampleToken(false);
        setTestToken(true);
        $(".test-container").fadeIn("linear");
    }
    function testToExample() {
        setExampleToken(true);
        setTestToken(false);
        $(".example-container").fadeIn("linear");
    }


    return (
        <FadeIn>
            <Login isLoggined={loginToken} changePage={loginToExample} />
            <Example isLoggined={exampleToken} moveLoginPage={exampleToLogin} moveTestPage={exampleToTest} />
            <Test isLoggined={testToken} changePage={testToExample} history={history} />
        </FadeIn> 
    );
}

export default Home;

