import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search"
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar"
import Location from "./components/Routers/Location"
import About from "./components/Routers/About"



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  );
}


const Home = () => {

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
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row justify-content-center">
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
