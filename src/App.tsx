import React, { useContext, useState } from "react";
import { Routes } from "react-router-dom";
import "./styles/index.scss";
import { ThemeContext, Themes } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      {/* <Routes>aaaaыыыыы</Routes> */}
      consolas aaaaa
    </div>
  );
};

export default App;
