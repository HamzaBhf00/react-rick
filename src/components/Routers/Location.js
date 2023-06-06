import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import InputGroup from "../InputGroup";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3 justify-content-center">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">Elegir ubicación</h4>
            <InputGroup name="Location" changeID={setNumber} total={126} />
          </div>
          <h1 className="text-center mb-3">
            Ubicación :
            <span className="text-success">
              {" "}
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
