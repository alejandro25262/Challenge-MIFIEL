import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Index = () => {
  const user = useFetch("https://app-sandbox.mifiel.com/api/v1/users/me");
  useEffect(() => {
    console.log(user);
  }, [user]);
  return <div className="text-red-900">Pruebas</div>;
};

export default Index;
