/**
 * Main routes of app using lazy import to reduce the size of the chunks and improve performance
 */

import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Documents = lazy(() => import("../pages/Documents/Index"));
const AddDocument = lazy(() => import("../pages/AddDocument/Index"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Documents />} />
        <Route path="/subirDocumento/*" element={<AddDocument />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
