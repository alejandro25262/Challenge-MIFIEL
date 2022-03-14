import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSigner,
  delSigner,
  postDocumentApi,
  updateSigner,
} from "../../redux/documents/actions";

const AddDocument = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { document } = useSelector((state) => state);
  const { signatories } = document;

  const handleChange = ({ target: { value, name } }, index) => {
    const newSignatories = [...signatories];
    newSignatories[index] = { ...newSignatories[index], [name]: value };
    dispatch(updateSigner(newSignatories));
  };

  const newSigner = () => {
    dispatch(addSigner({ email: "", name: "", rfc: "" }));
  };

  const deleteSigner = () => {
    const newSignatories = signatories;
    signatories.pop();

    dispatch(delSigner(newSignatories));
  };

  const postDocument = (ev) => {
    ev.preventDefault();
    dispatch(postDocumentApi(document));
  };

  return (
    <div className="px-40 pt-8">
      <h1 className="font-bold text-xl">Preparación del documento</h1>
      <form
        className="flex flex-wrap justify-center mt-8"
        onSubmit={postDocument}
      >
        <p className="font-bold text-base flex items-center w-full inline-block justify-center mb-2">
          Firmantes{" "}
          <img
            alt="add"
            src="./images/add.svg"
            className="w-8 h-8 mx-2 cursor-pointer"
            onClick={newSigner}
          />
          {signatories.length > 1 && (
            <img
              alt="add"
              src="./images/minus.svg"
              className="w-8 h-8 mx-2 cursor-pointer"
              onClick={deleteSigner}
            />
          )}
        </p>
        <div className="w-1/2 border-2 border-gray-900 p-4">
          {signatories.map(({ email, name, rfc }, index) => (
            <div key={index}>
              <div className="inline-block w-1/2 my-2">
                <label className="block font-bold text-xs">
                  CORREO ELECTRÓNICO
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=" correo@dominio.com"
                  className="border-gray-900 border-2"
                  value={email}
                  onChange={(ev) => handleChange(ev, index)}
                  required
                />
              </div>
              <div className="inline-block w-1/2 my-2">
                <label className="block font-bold text-xs">NOMBRE</label>
                <input
                  type="text"
                  name="name"
                  placeholder=" Nombre del firmante"
                  className="border-gray-900 border-2"
                  value={name}
                  onChange={(ev) => handleChange(ev, index)}
                  required
                />
              </div>
              <div className="inline-block w-1/2 my-2">
                <label className="block font-bold text-xs">RFC</label>
                <input
                  type="text"
                  name="rfc"
                  placeholder=" RFC del firmante"
                  className="border-gray-900 border-2"
                  value={rfc}
                  onChange={(ev) => handleChange(ev, index)}
                  required
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-4">
          <button
            className="border-2 border-gray-900 mr-2 px-4 hover:bg-gray-900 hover:text-white"
            type="submit"
          >
            Solicitar firmas
          </button>
          <button
            className="border-2 border-gray-900 ml-2 px-4 hover:bg-gray-900 hover:text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDocument;
