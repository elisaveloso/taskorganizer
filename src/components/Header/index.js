import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckSquare } from 'react-icons/fi';

import './styles.css';

export default function Header() {
    return (
        <header className="header-container">

            <FiCheckSquare size="64" color="#831900" />

            <nav className="nav-container">
                <Link to="/">HOME</Link>
                <Link to="/teste">ENTRAR</Link>
            </nav>

        </header>
    );
}