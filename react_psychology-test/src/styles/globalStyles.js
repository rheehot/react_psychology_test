import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 1.0s linear;
  }
  // 인트로 페이지
  // 로그인 페이지
  label {
    color: ${({ theme }) => theme.text}; 
  }
  #login-gender {
    color: ${({ theme }) => theme.loginLabel};   
  }
  #standard-textarea {
    color: ${({ theme }) => theme.text}; 
  }
  .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated {
    transition: ${({ theme }) => theme.loginInput}; 
    color : ${({ theme }) => theme.text}; 
    :focused : ${({ theme }) => theme.loginLabelFocus};
  }
  .MuiFormLabel-root.MuiInputLabel-rootM.uiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.Mui-focused.Mui-focused {
    color : ${({ theme }) => theme.loginLabelFocus};
  }
  .MuiButtonBase-root.MuiIconButton-root.PrivateSwitchBase-root-3.MuiRadio-root {
    color : ${({ theme }) => theme.loginRadio}; 
  }
  // 검사예시 페이지
  .form-group {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .MuiTypography-root.MuiTypography-h6.MuiTypography-colorTextSecondary {
    color : ${({ theme }) => theme.text}; 
  }
  // 검사진행 페이지
  .group0 {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .group1 {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .group2 {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .group3 {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding}; 
  }
  .group4 {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding}; 
  }
  .group5 {
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .job-table-h {
    color: ${({ theme }) => theme.resultTableTitle}; 
  }  
  // 결과완료 페이지

  // 검사결과 페이지
  .table {
    color : ${({ theme }) => theme.text};   
  }
  #kakaoBtn {
    color: ${({ theme }) => theme.text};
  }
  #githubBtn {
    color: ${({ theme }) => theme.text};
  }
  // 추가검사 소개페이지
  `

export const lightTheme = {
    body: '#FFF',
    text: '#121212',
    loginRadio: "#121212",
    loginLabel: "#121212",
    loginInput: "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    loginLabel: "#121212",
    loginLabelFocus: "#3f51b5",
    testDiv : '#dce2e8',
    testDivBorder: "1px solid rgba(0,0,0,.125)",
    testDivPadding: "20px",
}

export const darkTheme = {
    body: '#121212',
    text: '#FFF',
    loginRadio : "#FFF",
    loginLabel: "#FFF",
    loginLabelFocus: "#3f51b5",
    loginInput: "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    testDiv : '#333335',
    testDivBorder: "1px solid rgba(0,0,0,.125)",
    testDivPadding:  "20px",
    resultTableTitle: '#121212',
    
}