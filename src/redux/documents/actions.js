import {
  ADD_SIGNER,
  DELETE_SIGNER,
  GET_DOCUMENTS,
  GET_DOCUMENTS_SUCCESS,
  GET_DOCUMENTS_ERROR,
  POST_DOCUMENT,
  SAVE_DOCUMENT,
  SAVE_DOCUMENT_ERROR,
  SET_FILTER_DOCUMENTS,
  UPDATE_SIGNER,
  POST_DOCUMENT_SUCCESS,
  POST_DOCUMENT_ERROR,
  DELETE_DOCUMENT,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR,
} from "../actions";

export const saveDocument = (document) => {
  return {
    type: SAVE_DOCUMENT,
    payload: { document },
  };
};

export const saveDocumentError = (error) => {
  return {
    type: SAVE_DOCUMENT_ERROR,
    payload: { error },
  };
};

export const getDocuments = (filters) => {
  return {
    type: GET_DOCUMENTS,
    payload: { filters },
  };
};

export const getDocumentsSuccess = (documents) => {
  return {
    type: GET_DOCUMENTS_SUCCESS,
    payload: { documents },
  };
};

export const getDocumentsError = (error) => {
  return {
    type: GET_DOCUMENTS_ERROR,
    payload: { error },
  };
};

export const setFiltersDocuments = (status, page, perPage) => {
  return {
    type: SET_FILTER_DOCUMENTS,
    payload: { status, page, perPage },
  };
};

export const addSigner = (signer) => {
  return {
    type: ADD_SIGNER,
    payload: { signer },
  };
};

export const updateSigner = (signatories) => {
  return {
    type: UPDATE_SIGNER,
    payload: { signatories },
  };
};

export const delSigner = (signatories) => {
  return {
    type: DELETE_SIGNER,
    payload: { signatories },
  };
};

export const postDocumentApi = (document) => {
  return {
    type: POST_DOCUMENT,
    payload: { document },
  };
};

export const postDocumentApiSuccess = (documents) => {
  return {
    type: POST_DOCUMENT_SUCCESS,
    payload: { documents },
  };
};

export const postDocumentApiError = (error) => {
  return {
    type: POST_DOCUMENT_ERROR,
    payload: { error },
  };
};

export const deleteDocumentApi = (id, filters) => {
  return {
    type: DELETE_DOCUMENT,
    payload: { id, filters },
  };
};

export const deleteDocumentApiSuccess = (documents) => {
  return {
    type: DELETE_DOCUMENT_SUCCESS,
    payload: { documents },
  };
};

export const deleteDocumentApiError = (error) => {
  return {
    type: DELETE_DOCUMENT_ERROR,
    payload: { error },
  };
};
