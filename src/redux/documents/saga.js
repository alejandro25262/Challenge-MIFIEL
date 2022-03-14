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
} from "../documents/actions";

export function* getDocuments() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(GET_DOCUMENTS, getDocumentsSaga);
}

const getDocumentsDataApi = async ({ page, perPage, status }) => {
  const data = await getMIFIEL(
    "https://app-sandbox.mifiel.com/api/v1/documents",
    {
      page,
      page_size: perPage,
    }
  );
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
  const data = await deleteDocumentMIFIEL(
    "https://app-sandbox.mifiel.com/api/v1/documents",
    id
  );
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
  }
}

export function* postDocument() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(POST_DOCUMENT, postDocumentSaga);
}

const postDocumentApi = async (document) => {
  console.log(document);
  // const data = await postDocumentMIFIEL(
  //   "https://app-sandbox.mifiel.com/api/v1/documents",
  //   id
  // );
  // return data;
};

function* postDocumentSaga({ payload }) {
  try {
    const { document } = payload;
    const response = yield call(postDocumentApi, document);
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([fork(getDocuments), fork(deleteDocument), fork(postDocument)]);
}
