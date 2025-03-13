import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from "./components/web";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
