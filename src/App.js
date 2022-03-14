import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "./redux/user/actions";
import Header from "./pages/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(saveUser());
  }, []);

  useEffect(() => {
    if (error) error.map((err) => window.alert(err));
  }, [error]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <AppRouter />
    </Suspense>
  );
}

export default App;
