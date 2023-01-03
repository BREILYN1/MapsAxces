import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Menu from "./components/menu";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rutas de los archivos de codigos que van en la carpeta src/components */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
