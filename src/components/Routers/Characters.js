import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const Characters = () => {
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

    return <div className="App">
        <div className="App">
            <h1 className="text-center mb-3 mt-5">Caracteres</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <Cards page="/" results={results} />
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

export default Characters