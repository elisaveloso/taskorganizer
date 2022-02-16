import React from 'react';
import { Link } from 'react-router-dom';
import { FiInbox, FiTrash2, FiList, FiUsers, FiClock, FiHelpCircle, FiCheckSquare } from 'react-icons/fi';

import './styles.css';

export default function AppMenu() {
    return (
        <div className="menu-container">
            <div className="menu-nav">

                <Link className="menu-nav-option">
                    <FiInbox />
                    <p>Caixa de entrada</p>
                </Link>

                <Link className="menu-nav-option">
                    <FiTrash2 />
                    <p>Lixeira</p>
                </Link>

                <Link className="menu-nav-option">
                    <FiList />
                    <p>Tarefas</p>
                </Link>

                <Link className="menu-nav-option">
                    <FiUsers />
                    <p>Equipe</p>
                </Link>

                <Link className="menu-nav-option">
                    <FiClock />
                    <p>Lembretes</p>
                </Link>

            </div>

            <hr></hr>


            <Link to="/" className="menu-logo">
                <FiCheckSquare size="64" color="#831900" />
            </Link>


            <hr></hr>

            <Link className="menu-nav-option menu-nav-help">
                    <FiHelpCircle />
                    <p>Ajuda</p>
            </Link>



        </div>
    );
}