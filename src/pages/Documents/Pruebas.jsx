import React, { useEffect } from "react";

const Pruebas = () => {
  useEffect(() => {
    const credentials = btoa(
      "459fe365ff2c8f27492803c8da5b89ff076549de:mjdhcn4Ln2MMoSri/UPo1T+sDq7/TwqcHU8BUZnhsTbV60BWPEPzLK0xKMUQ1qSsIhfkTQyQA+RSv4kwy59JZw=="
    );
    const auth = { Authorization: `Basic ${credentials}` };
    fetch("https://app-sandbox.mifiel.com/api/v1/users/me", {
      headers: auth,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="text-red-900">Pruebas</div>;
};

export default Pruebas;
