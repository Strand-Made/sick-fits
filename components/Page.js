/* eslint-disable react/prop-types */
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header/Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "radnika_next";
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weigth: normal;
    font-style: normal;
  }
  :root {
    --red: #ff0000;
    --black: #393939;
    --gray: #3a3a3a;
    --lightGray: #e1e1e1;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: "radnika_next" ,-apple-system, BlinkMacSystemFont, 
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif, 
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: var(--black);
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    font-family: "radnika_next" ,-apple-system, BlinkMacSystemFont, 
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif, 
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
  }


`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <div>
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  </>
);

export default Page;
