import React from 'react'

const Pagination = ({ updatePageNumber, pageNumber }) => {
    let next = () => { updatePageNumber((x) => x + 1) }
    let prev = () => {
        if (pageNumber === 1) return
        updatePageNumber((x) => x - 1)
    }

    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={prev} className="btn btn-success">Anterior</button>
            <button onClick={next} className="btn btn-success">Siguiente</button>
        </div>
    )
}

export default Pagination