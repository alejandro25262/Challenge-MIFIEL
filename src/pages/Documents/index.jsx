import React, { Fragment, useEffect } from "react";

import Dropzone from "react-dropzone-uploader";
import { useDispatch, useSelector } from "react-redux";
import { saveDocument } from "../../redux/documents/actions";

const Index = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state);
  useEffect(() => {}, []);

  const styles = {
    submitButton: {
      backgroundColor: "black",
      color: "white",
      padding: "2px 12px",
    },
    input: {
      display: "none",
    },
    inputLabel: {
      color: "#878787",
      fontSize: "16px",
      cursor: "pointer",
    },
    submitButtonContainer: {
      marginLeft: "24px",
    },
    previewFileName: {
      color: "blue",
    },
    dropzone: {
      margin: "16px 0",
      height: "100px",
      border: "1px dashed #cecece",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  };

  const handleSubmit = async (files, allFiles) => {
    console.log(files[0].file);
    // const blob = new Blob([files[0].file], {
    //   type: "application/octet-binary",
    // });
    // console.log(blob);
    dispatch(saveDocument(files[0].file));
    allFiles.forEach((f) => f.remove());
  };

  const inputContent = () => (
    <Fragment key={0}>
      <p>Arrastra o haz clic aquí para seleccionar un archivo de Excel</p>
    </Fragment>
  );

  return (
    <div className="px-40 pt-8">
      <div>
        <p className="font-bold text-xl">
          Prepara un documento para solicitar que sea firmado
        </p>
        <Dropzone
          onSubmit={handleSubmit}
          accept={"application/pdf"}
          inputContent={inputContent}
          submitButtonContent="Importar"
          maxFiles={1}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default Index;
