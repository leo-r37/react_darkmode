import { Cover, Switch, Themes } from "./components";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Switch theme={theme} setTheme={setTheme} />
        <Cover theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default App;
