import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav gap-5 my-3">

                    <li className="nav-item">
                        <NavLink to="/"><button type="button" className="btn btn-success">Home</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/characters"><button type="button" className="btn btn-success">Personajes</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/location"><button type="button" className="btn btn-success">Ubicación</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about"><button type="button" className="btn btn-success">Sobre Nosotros</button></NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar