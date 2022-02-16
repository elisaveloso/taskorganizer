import React from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import './styles.css';

export default function Board({title}) {
    return (
        <div className="board-container">
            <h4 className="board-title">{title}</h4>
            <div className="task-container">
                <div className="task-content">
                    <p className="task-title">Reunião Geral</p>
                    <div className="task-edit-option">
                        <FiEdit2 />
                        <FiTrash2 />
                    </div>
                    
                </div>
                <div className="task-content">
                    <p className="task-title">Reunião Geral</p>
                    <div className="task-edit-option">
                        <FiEdit2 />
                        <FiTrash2 />
                    </div>
                    
                </div>
                
            </div>
            <button className="button-add">+ Adicionar tarefa</button>
        </div>
    );
}