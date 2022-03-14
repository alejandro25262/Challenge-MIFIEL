import {
  ADD_SIGNER,
  DELETE_SIGNER,
  GET_DOCUMENTS,
  GET_DOCUMENTS_SUCCESS,
  GET_DOCUMENTS_ERROR,
  SAVE_DOCUMENT,
  SAVE_DOCUMENT_ERROR,
  SAVE_USER_DATA,
  SAVE_USER_DATA_SUCCESS,
  SAVE_USER_DATA_ERROR,
  SET_FILTER_DOCUMENTS,
  UPDATE_SIGNER,
  DELETE_DOCUMENT,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_ERROR,
  POST_DOCUMENT,
  POST_DOCUMENT_SUCCESS,
  POST_DOCUMENT_ERROR,
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
    signatories: [
      {
        email: "",
        name: "",
        rfc: "",
      },
    ],
  },
  error: null,
  list: {
    filters: {
      status: "all",
      page: 1,
      perPage: 10,
    },
    loading: true,
    table: {
      data: [],
    },
  },
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return { ...state, user: { ...state.user, loading: true } };

    case SAVE_USER_DATA_SUCCESS:
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

    case GET_DOCUMENTS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };

    case GET_DOCUMENTS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          table: { ...state.list.table, data: action.payload.documents },
        },
      };

    case GET_DOCUMENTS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
        },
        error: action.payload.error,
      };

    case SET_FILTER_DOCUMENTS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          filters: {
            ...state.list.filters,
            status: action.payload.status,
            page: action.payload.page,
            perPage: action.payload.perPage,
          },
        },
      };

    case ADD_SIGNER:
      return {
        ...state,
        document: {
          ...state.document,
          signatories: [...state.document.signatories, action.payload.signer],
        },
      };

    case UPDATE_SIGNER:
      return {
        ...state,
        document: {
          ...state.document,
          signatories: [...action.payload.signatories],
        },
      };

    case DELETE_SIGNER:
      return {
        ...state,
        document: {
          ...state.document,
          signatories: [...action.payload.signatories],
        },
      };

    case DELETE_DOCUMENT:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };

    case DELETE_DOCUMENT_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          table: { ...state.list.table, data: action.payload.documents },
        },
      };

    case DELETE_DOCUMENT_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
        },
        error: action.payload.error,
      };

    case POST_DOCUMENT:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };

    case POST_DOCUMENT_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          table: { ...state.list.table, data: action.payload.documents },
        },
      };

    case POST_DOCUMENT_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
        },
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};
