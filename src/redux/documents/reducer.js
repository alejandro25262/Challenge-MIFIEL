import {
  SAVE_DOCUMENT,
  SAVE_DOCUMENT_ERROR,
  SAVE_USER_DATA,
  SAVE_USER_DATA_CORRECTO,
  SAVE_USER_DATA_ERROR,
} from "../actions";

const INIT_STATE = {
  user: {
    name: "",
    email: "",
    avatar: "",
    loading: true,
  },
  document: {
    binary: null,
    signatories: {
      email: "",
      name: "",
      rfc: "",
    },
  },
  error: null,
  list: {
    filters: {
      status: "all",
      page: 1,
      perPage: 1,
    },
    loading: false,
    table: {
      data: [],
    },
  },
};

const formDefault = JSON.parse(JSON.stringify(INIT_STATE));

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return { ...state, user: { ...state.user, loading: true } };

    case SAVE_USER_DATA_CORRECTO:
      return { ...state, user: { ...action.payload.user, loading: false } };

    case SAVE_USER_DATA_ERROR:
      return {
        ...state,
        user: { ...state.user, loading: false },
        error: action.payload.error,
      };

    case SAVE_DOCUMENT:
      return {
        ...state,
        document: { ...state.document, binary: action.payload.document },
      };

    case SAVE_DOCUMENT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};
