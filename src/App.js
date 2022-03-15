import React, { Suspense } from "react";
import Alert from "./pages/components/Alert";
import Header from "./pages/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Alert />;
      <Header />
      <AppRouter />
    </Suspense>
  );
}

export default App;
