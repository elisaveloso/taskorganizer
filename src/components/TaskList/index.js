import React from 'react';

import Board from '../Board';

import './styles.css';

export default function TaskList() {
    return (
        <div class="task-list-container">
            <div class="task-list-title">
                <h1>Tarefas</h1>
                <button className="button-add">+ Criar novo quadro</button>
            </div>
            <div className="task-board-list">
                <Board title="A Fazer"/>
                <Board title="A Fazer"/>
                <Board title="A Fazer"/>
            </div>
        </div>
    );
}