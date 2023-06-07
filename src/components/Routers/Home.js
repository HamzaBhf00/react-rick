import React from 'react'
import foto1 from "../Assets/foto1.png"
import foto2 from "../Assets/foto2.png"
import foto3 from "../Assets/foto3.png"


const Home = () => {
    return (
        <div className="div">
            <div className="container-fluid bg-3 text-center py-5 bg-light">
                <h1>Bienvenidos a Rick & Morty</h1>
                <div className="row mt-4">
                    <div className="col-sm-4">
                        <img src={foto1} alt="" width="350" height="300"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={foto2} alt="" width="350" height="300"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={foto3} alt="" width="350" height="300"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home