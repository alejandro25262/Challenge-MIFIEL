const credentials = btoa(
  `${process.env.REACT_APP_ID}:${process.env.REACT_APP_SECRET}`
);
const auth = { Authorization: `Basic ${credentials}` };

export const getMIFIEL = async (apiUrl, filters = {}) => {
  const requestConfig = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      ...auth,
    }),
  };

  let urlParams = "";
  if (filters) {
    urlParams = Object.keys(filters)
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`;
      })
      .join("&");
  }

  const urlWithParams = `${apiUrl}?${urlParams}`;

  const request = new Request(urlWithParams, requestConfig);
  const response = await fetch(request);
  const catalogo = await response.json();
  return catalogo;
};

export const postDocumentMIFIEL = async (apiUrl, body) => {
  const requestConfig = {
    method: "POST",
    headers: new Headers({
      ...auth,
    }),
    body,
  };

  const request = new Request(apiUrl, requestConfig);
  const response = await fetch(request);
  const data = await response.json();

  return data;
};

export const deleteDocumentMIFIEL = async (apiUrl, id) => {
  const requestConfig = {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      ...auth,
    }),
  };

  const urlWithId = `${apiUrl}/${encodeURI(id)}/`;

  const request = new Request(urlWithId, requestConfig);
  const response = await fetch(request);
  const data = await response.json();

  return data;
};
