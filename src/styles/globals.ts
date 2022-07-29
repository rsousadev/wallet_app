import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root{
      --background:#FFFFFF;
      --background_option: #F8F8FB;
      --background-white-itens: #F3F6FF;
      --background-hide: #61697D;
      --background-option-btn: #0D1028;
      --background-emphasis: #1CD69D;
      --background-notify: #5297FF;
      --font: 'Source Sans Pro', sans-serif;
      
   }
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   html{
      @media (max-width:1080px) {
         font-size: 93.75%;
      }
      @media (max-width:720px) {
         font-size: 87.5%;
      }
   }
   body{
      background-color: var(--background);
      -webkit-font-smooth: antialiased;
      font-family: var(--font);
   }
`;
