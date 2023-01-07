import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand fs-1 titulo" to="/">Milobik</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0 text-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link fs-4 mx-3" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-4 mx-3" to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-4 mx-3" to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-4 mx-3"><i className="bi bi-bag-heart-fill text-danger"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar