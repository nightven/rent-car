import { createGlobalStyle } from "styled-components";
import Regular from "../assets/Fonts/manrope400.ttf";
import Medium from "../assets/Fonts/manrope500.ttf";
import Bold from "../assets/Fonts/manrope600.ttf";

export const GlobalStyle = createGlobalStyle`
:root{
  // COLORS
  // * Primary colors: 

  --primary-white:#FFFFFF;
  --primary-black: #121417;
  --primary-blue: #3470ff;
  --primary-grey: rgba(18, 20, 23, 0.50);

  // * Secondary colors: 
  --active-blue: #0B44CD;
  --line-gray:#1214171a;
 



  // FONTS

  --font-size: 12px;
  --line-height: 18px;
  --font-style: normal;
  --regular-font-weight: 400;
  --medium-font-weight: 500;
  --bold-font-weight: 700;


  //GRADIENT
  --img-gradient: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
      ),
      #f3f3f2;
  --header-gradient:linear-gradient(
    to bottom,
    hsl(204, 100%, 97.06%) 0%,
    hsl(206.28, 95.2%, 96.56%) 10.2%,
    hsl(209.97, 88.38%, 95.44%) 19.2%,
    hsl(213.44, 82.9%, 93.77%) 27.3%,
    hsl(216.11, 79.25%, 91.61%) 34.5%,
    hsl(217.98, 77%, 88.99%) 41%,
    hsl(219.2, 75.72%, 85.97%) 47%,
    hsl(219.92, 75.12%, 82.57%) 52.6%,
    hsl(220.23, 75%, 78.84%) 57.9%,
    hsl(220.18, 75.25%, 74.8%) 63.1%,
    hsl(219.77, 75.8%, 70.49%) 68.3%,
    hsl(218.99, 76.6%, 65.94%) 73.7%,
    hsl(217.76, 77.62%, 61.18%) 79.4%,
    hsl(216, 78.86%, 56.23%) 85.6%,
    hsl(213.6, 80.28%, 51.1%) 92.4%,
    hsl(210, 100%, 45.1%) 100%
  );


// SHADOW
--btn-box-shadow: 0 4px 8px #407BFF57;
--btn-box-shadow-hover: 0 4px 14px #407BFF8A;
 
}

// FONTS 

@font-face {
    font-family: 'Manrope',sans-serif;
    src: url(${Regular}) format('truetype'),
    }

  @font-face {
    font-family: 'Manrope',sans-serif;
    src: url(${Medium}) format('truetype'),
    }

  @font-face {
    font-family: 'Manrope',sans-serif;
    src: url(${Bold}) format('truetype'),
    }


  // STYLES

  
  body{
    
    font-family: 'Manrope', sans-serif;
    font-weight: var(--regular-font-weight);
    font-style: normal;
    font-size: var(  --font-size);
    line-height: var(--line-height);
    
    color: var(--primary-grey);
    background-color: var(--primary-white);
 
}
  .is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.no-scroll {
  overflow: hidden;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}


.container {
 
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto; 
  
  @media screen and (min-width: 375px) {
        max-width: 320px;
        };
  
  @media screen and (min-width: 768px) {
        max-width: 744px;
        
        };

   @media screen and (min-width: 1440px) {        
        max-width: 1213px;       
      
       };
}`;
