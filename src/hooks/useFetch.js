import { useEffect, useRef, useState } from "react";

// useFecth receives a url and makes an asynchronous request
const useFetch = (url) => {
  // a state is declared with default values
  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
  });

  // useRef allows to know if the component is mounted or not
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // runs when component is dismount
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // reset values
    setData({
      data: null,
      loading: true,
      error: null,
    });

    const credentials = btoa(
      "459fe365ff2c8f27492803c8da5b89ff076549de:mjdhcn4Ln2MMoSri/UPo1T+sDq7/TwqcHU8BUZnhsTbV60BWPEPzLK0xKMUQ1qSsIhfkTQyQA+RSv4kwy59JZw=="
    );
    const auth = { Authorization: `Basic ${credentials}` };

    fetch(url, {
      headers: auth,
    })
      .then((resp) => resp.json())
      .then((data) => {
        // if the component is mount then set values
        if (isMounted.current) setData({ data, loading: false, error: null });
      })
      .catch(() =>
        setData({
          data: null,
          loading: false,
          error: "data could not be obtained",
        })
      );
  }, [url]);

  return data;
};

export default useFetch;
