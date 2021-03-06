import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "@material-ui/styles";
import theme from './style/materialUiSettings';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
