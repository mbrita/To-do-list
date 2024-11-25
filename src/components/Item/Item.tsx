import React, {FC} from 'react';
import cls from './Item.module.scss'
import {todo} from "../../types/types";

interface TodoProps {
    todo: todo,
    deleteTodo: (id: string) => void,
    toggleTodo: (id: string) => void
}

const Todo: FC<TodoProps> = ({todo, deleteTodo, toggleTodo}) => {
    return (
        <div className={`${cls.todo} ${todo.isCompleted ? cls.completedTodo : ''}`}>
            <div
                data-testid={"check item"}
                className={cls.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.isCompleted ?
                    <i className="fa-solid fa-check"></i> : null
                }
            </div>
            <h5 className={cls.todoText}>{todo.nameTodo}</h5>
            <div className={cls.deleteIcon} onClick={() => deleteTodo(todo.id)}><i className="fa-solid fa-trash"></i>
            </div>

        </div>
    );
};

export default Todo;
