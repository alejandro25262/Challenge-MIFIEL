import { SAVE_DOCUMENT, SAVE_DOCUMENT_ERROR } from "../actions";

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
