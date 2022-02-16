import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function LandingText() {
    return (
        <section className="landing-text-container">

            <h1>TASK ORGANIZER</h1>
            <h3>ORGANIZE SUAS TAREFAS.</h3>
            <p>RÁPIDO E FÁCIL</p>
            <Link className="button-no-fill" to="/teste">INICIAR</Link>

        </section>
    );
}