import React, { useState } from "react";
import Example from "./Example";
import Test from "./Test";
import Login from "./Login";

function Home({history}) {
    const [loginToken, setLoginToken] = useState(true);
    const [exampleToken, setExampleToken] = useState(false);
    const [testToken, setTestToken] = useState(false);

    //const [progress,setProgress] = useState("0");

    function loginToExample() {
        setLoginToken(false);
        setExampleToken(true);
    }
    function exampleToLogin() {
        setLoginToken(true);
        setExampleToken(false);
    }
    function exampleToTest() {
        setExampleToken(false);
        setTestToken(true);
    }
    function testToExample() {
        setExampleToken(true);
        setTestToken(false);
    }


    return (
        <>
            <Login isLoggined={loginToken} changePage={loginToExample} />
            <Example isLoggined={exampleToken} moveLoginPage={exampleToLogin} moveTestPage={exampleToTest} />
            <Test isLoggined={testToken} changePage={testToExample} history={history} />
        </> 
    );
}

export default Home;

