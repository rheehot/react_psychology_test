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
  .group0{
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .group1{
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .group2{
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  .group3{
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding}; 
  }
  .group4{
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding}; 
  }
  .group5{
    background-color : ${({ theme }) => theme.testDiv};
    border: ${({ theme }) => theme.testDivBorder};
    padding: ${({ theme }) => theme.testDivPadding};
  }
  
  // 결과완료 페이지

  // 검사결과 페이지

  // 추가검사 소개페이지
  `

export const lightTheme = {
    body: '#FFF',
    text: '#121212',
    testDiv : '#dce2e8',
    testDivBorder: "1px solid rgba(0,0,0,.125)",
    testDivPadding: "20px",
}

export const darkTheme = {
    body: '#121212',
    text: '#FFF',
    testDiv : '#333335',
    testDivBorder: "1px solid rgba(0,0,0,.125)",
    testDivPadding:  "20px",
}