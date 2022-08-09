import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { StyledEngineProvider } from "@mui/styled-engine";
import { StylesProvider, jssPreset } from "@mui/styles";
import { create } from 'jss';
import rtl from 'jss-rtl';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <StylesProvider jss={jss}>
        <h1> Hehe </h1>
        <App />
      </StylesProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
