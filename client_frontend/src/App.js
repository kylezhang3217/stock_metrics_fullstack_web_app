import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from './components/Home';
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
        <div className= 'content'>
          <Dashboard />
        </div>
    </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
