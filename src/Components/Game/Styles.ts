import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
// import BG from "./images/BG.jpg";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

  html{
    height: 100%;
  }

  body{
    font-family: 'Poppins', sans-serif;
    
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 1.2rem;
    background: #6695c1;
    width: 100%;
    text-align: center;
    color: #fff;
    box-shadow: 2px 2px #0085a3;
    padding: 2px;
  }

  h1 {
    font-family: Poppins;
    background: #83a4d4; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #b6fbff, #83a4d4);
    background: linear-gradient(to right, #b6fbff, #83a4d4);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 2px #0085a3);
    font-size: 35px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: #6dbad4;
    width: 50%;
    color: #fff;
    border: none;
    padding: 5px;
    margin: 20px 0px;
    font-weight: bold;
    box-shadow: 1px 3px #0085a3;
    max-width: 300px;
  }

  .complete {
    font-size: 1.2 rem;
    font-weight: bold;
    color: green;
  }
`;
/* background-image: url(${BG});*/