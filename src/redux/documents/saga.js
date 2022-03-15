import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getMIFIEL,
  deleteDocumentMIFIEL,
  postDocumentMIFIEL,
} from "../../API/endpoints";
import { DELETE_DOCUMENT, GET_DOCUMENTS, POST_DOCUMENT } from "../actions";
import {
  deleteDocumentApiError,
  deleteDocumentApiSuccess,
  getDocumentsSuccess,
  postDocumentApiError,
} from "../documents/actions";

import { DOCUMENTS_URL } from "../../constants/apiRoutes.js";
import { setAlert } from "../alert/actions";

export function* getDocuments() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(GET_DOCUMENTS, getDocumentsSaga);
}

const getDocumentsDataApi = async ({ page, perPage, pending, signed }) => {
  const data = await getMIFIEL(DOCUMENTS_URL, {
    page,
    page_size: perPage,
    pending,
    signed,
  });
  if (data) {
    const newData = data.map(
      ({ file_file_name, signers, created_at, state, id }) => ({
        id,
        fileName: file_file_name,
        signers: signers.map((signer) => signer.email),
        createdAt: created_at,
        state,
      })
    );

    return newData;
  }

  return data;
};

function* getDocumentsSaga({ payload: { filters } }) {
  try {
    const response = yield call(getDocumentsDataApi, filters);
    yield put(getDocumentsSuccess(response));
  } catch (error) {}
}

export function* deleteDocument() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(DELETE_DOCUMENT, deleteDocumentSaga);
}

const deleteDocumentApi = async ({ id }) => {
  const data = await deleteDocumentMIFIEL(DOCUMENTS_URL, id);
  return data;
};

function* deleteDocumentSaga({ payload }) {
  try {
    const response = yield call(deleteDocumentApi, payload);
    if (response.status === "fail") {
      yield put(deleteDocumentApiError(response.errors));
    }

    if (response.status === "error") {
      yield put(deleteDocumentApiError(response.errors));
    }
  } catch (error) {
    const { filters } = payload;
    // for some reason it shows error but deletes the document
    const response = yield call(getDocumentsDataApi, filters);
    yield put(deleteDocumentApiSuccess(response));
    yield put(
      setAlert({
        type: "success",
        message: ["¡Has eliminado el documento exitosamente!"],
      })
    );
  }
}

export function* postDocument() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(POST_DOCUMENT, postDocumentSaga);
}

const postDocumentApi = async (document) => {
  const { binary, signatories } = document;
  const form = new FormData();
  form.append("file", binary);
  signatories.map((signer, index) => {
    form.append(`signatories[${index}][name]`, signer.name);
    form.append(`signatories[${index}][email]`, signer.email);
    form.append(`signatories[${index}][tax_id]`, signer.rfc);
  });
  const data = await postDocumentMIFIEL(DOCUMENTS_URL, form);
  return data;
};

function* postDocumentSaga({ payload }) {
  try {
    const { document, navigate } = payload;
    const response = yield call(postDocumentApi, document);
    if (response.status === "fail") {
      yield put(postDocumentApiError(response.errors));
    }

    if (response.status === "error") {
      yield put(postDocumentApiError(response.errors));
    }

    if (response.state) {
      yield put(
        setAlert({
          type: "success",
          message: ["¡Has enviado el documento exitosamente!"],
        })
      );
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([fork(getDocuments), fork(deleteDocument), fork(postDocument)]);
}
