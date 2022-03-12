const credentials = btoa(
  "459fe365ff2c8f27492803c8da5b89ff076549de:mjdhcn4Ln2MMoSri/UPo1T+sDq7/TwqcHU8BUZnhsTbV60BWPEPzLK0xKMUQ1qSsIhfkTQyQA+RSv4kwy59JZw=="
);
const auth = { Authorization: `Basic ${credentials}` };

export const get = async (apiUrl, filters = {}) => {
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

export const postDocument = async (apiUrl, model) => {
  const requestConfig = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      ...auth,
    }),
    body: JSON.stringify(model),
  };

  const request = new Request(apiUrl, requestConfig);
  const response = await fetch(request);
  const data = await response.json();

  return data;
};

export const deleteDocument = async (apiUrl, id) => {
  const requestConfig = {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      ...auth,
    }),
  };

  const urlWithId = `${apiUrl}${encodeURI(id)}/`;

  const request = new Request(urlWithId, requestConfig);
  const response = await fetch(request);
  const data = await response.json();

  return data;
};
