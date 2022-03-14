import React, { useEffect } from "react";
import ListDocuments from "./components/ListDocuments";
import UploadDocument from "./components/UploadDocument";

const Index = () => {
  useEffect(() => {}, []);

  return (
    <div className="px-40 pt-8">
      <UploadDocument />
      <ListDocuments />
    </div>
  );
};

export default Index;
