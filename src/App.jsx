import { useState } from "react";
import "./App.css";
import Header from "./components/Header/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
