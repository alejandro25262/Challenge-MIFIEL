import React, { Fragment } from "react";
import Dropzone from "react-dropzone-uploader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveDocument } from "../../../redux/documents/actions";

const UploadDocument = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(saveDocument(files[0].file));
    navigate("/subirDocumento");

    allFiles.forEach((f) => f.remove());
  };

  const inputContent = () => (
    <Fragment key={0}>
      <p>Arrastra o haz clic aquí para seleccionar un archivo de Excel</p>
    </Fragment>
  );
  return (
    <div>
      <h1 className="font-bold text-xl">
        Prepara un documento para solicitar que sea firmado
      </h1>
      <Dropzone
        onSubmit={handleSubmit}
        accept={"application/pdf"}
        inputContent={inputContent}
        submitButtonContent="Importar"
        maxFiles={1}
        styles={styles}
      />
    </div>
  );
};

export default UploadDocument;
