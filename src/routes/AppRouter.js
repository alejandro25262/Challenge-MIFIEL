/**
 * Main routes of app using lazy import to reduce the size of the chunks and improve performance
 */

import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { saveUser } from "../redux/user/actions";

const Documents = lazy(() => import("../pages/Documents/Index"));
const AddDocument = lazy(() => import("../pages/AddDocument/Index"));
const NotFound = lazy(() => import("../pages/NotFound/Index"));

const AppRouter = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(saveUser());
  }, []);

  useEffect(() => {
    if (error) error.map((err) => window.alert(err));
  }, [error]);

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
