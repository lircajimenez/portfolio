import styled, { createGlobalStyle } from "styled-components";

export const COLORS = {
  pink: "#cf0593",
  yellow: "#f0e227",
  green: "13A79E",
};

export default createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  color: white;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
ol, ul {
  list-style: none;
  }
a {
  text-decoration: none;
  }

`;
