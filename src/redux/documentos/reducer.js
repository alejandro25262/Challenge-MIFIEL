const INIT_STATE = {
  user: {
    name: "",
    email: "",
    avatar: "",
  },
  document: {
    binary: null,
    signatories: {
      email: "",
      name: "",
      rfc: "",
    },
  },
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
    // case COMPRA_DIRECTA_CREAR:
    //   return { ...state, estaCargando: true, error: null };

    default:
      return { ...state };
  }
};
