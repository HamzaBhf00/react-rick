import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar"


function App() {

  /////////API
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  //////// APP
  return <div className="App">
    <div className="App">
      <Navbar/>
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      info={info}
      pageNumber={pageNumber}
      updatePageNumber={updatePageNumber}
    />
  </div>

}

export default App;
