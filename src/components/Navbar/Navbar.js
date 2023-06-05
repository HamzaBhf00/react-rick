import React from 'react'
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav gap-5 my-3">

                    <li class="nav-item">
                        <NavLink to="/"><button type="button" class="btn btn-success">Home</button></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/episodes"><button type="button" class="btn btn-success">Episodios</button></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/location"><button type="button" class="btn btn-success">Ubicación</button></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/about"><button type="button" class="btn btn-success">Sobre Nosotros</button></NavLink>
                    </li>

                </ul>
            </div>
        </nav>


    )
}

export default Navbar