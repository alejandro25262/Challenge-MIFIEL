/**
 * Main routes of app using lazy import to reduce the size of the chunks and improve performance
 */

import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Pruebas = lazy(() => import("../pages/Documents/Pruebas"));
const AddDocument = lazy(() => import("../pages/AddDocument/AddDocument"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Pruebas />} />
        <Route path="/subirDocumento/*" element={<AddDocument />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
