import React from 'react';
import Helmet from 'react-helmet'
import {Global, css} from '@emotion/react'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box; 
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
          }

          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }

          h1, h2 {
            font-family: 'Roboto', serif;
          }

          h3 {
            font-family: 'PT-Sans', sans-serif; 
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>Space X | API</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,700;1,400&family=Roboto:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
      </Helmet>

      <Header/>
      {props.children}
      <Footer/>
    </>
  );
}
 
export default Layout;