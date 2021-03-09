import React, { useState } from "react";
import Example from "./Example";
import Test from "./Test";
import Login from "./Login";

import FadeIn from 'react-fade-in';
import $ from 'jquery';

import Toggle from "./Toggle";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/globalStyles";
import { Container } from "@material-ui/core";

function Home({history}) {
    const [loginToken, setLoginToken] = useState(true);
    const [exampleToken, setExampleToken] = useState(false);
    const [testToken, setTestToken] = useState(false);

    const [theme, toggleTheme, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <FadeIn>
                <Login isLoggined={loginToken} changePage={loginToExample} />
                <Example isLoggined={exampleToken} moveLoginPage={exampleToLogin} moveTestPage={exampleToTest} />
                <Test isLoggined={testToken} changePage={testToExample} history={history} />
                <Container style={{ textAlign: "center" }}><Toggle theme={theme} toggleTheme={toggleTheme} /></Container>
            </FadeIn> 
        </ThemeProvider>
    );
}

export default Home;

