import React, { Suspense } from "react";
import Header from "./pages/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <AppRouter />
    </Suspense>
  );
}

export default App;
