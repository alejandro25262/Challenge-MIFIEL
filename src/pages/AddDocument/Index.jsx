import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormSignatories from "./components/FormSignatories";

const AddDocument = () => {
  const navigate = useNavigate();
  const { document } = useSelector((state) => state.documents);
  const { binary } = document;

  useEffect(() => {
    // redirect to main route if there are not document
    if (!binary) navigate("/");
  }, [binary]);

  return (
    <div className="px-40 pt-8">
      <h1 className="font-bold text-xl">Preparación del documento</h1>
      <FormSignatories />
    </div>
  );
};

export default AddDocument;
