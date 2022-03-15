import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSigner,
  delSigner,
  postDocumentApi,
  updateSigner,
} from "../../../redux/documents/actions";

const FormSignatories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { document } = useSelector((state) => state.documents);
  const { signatories, loading } = document;

  // update inputs state of signer
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

  // if form is valid then submit
  const postDocument = (ev) => {
    ev.preventDefault();
    dispatch(postDocumentApi(document, navigate));
  };

  return (
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
          className={`border-2 border-gray-900 mr-2 px-4 ${
            !loading
              ? "hover:bg-gray-900 hover:text-white"
              : "bg-gray-300 border-gray-500"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading && (
            <svg
              role="status"
              className="inline mr-1 w-5 h-5 animate-spin fill-green-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
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
  );
};

export default FormSignatories;
