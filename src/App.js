import React from "react";
import { useSelector } from "react-redux";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";

function App() {
  const currentTheme = useSelector(state => state.theme.currentTheme);

  return (
    <Grommet theme={currentTheme === "light" ? lightTheme : darkTheme} full>
      <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={DashBoard} />
          </Switch>
        </Layout>
    </Grommet>
  );
}

export default App;
