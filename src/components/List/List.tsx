import React, {FC} from 'react';
import {todo} from "../../types/types";
import Item from "../Item/Item";
import cls from './List.module.scss'


interface TodoList{
    todos:todo[],
    deleteTodo:(id: string)=>void,
    toggleTodo:(id: string)=>void
}

const TodoList:FC<TodoList> = ({todos, deleteTodo, toggleTodo}) => {

    return(
        <div>
            {!todos.length && <h3 className={cls.emptyText}>list is empty</h3>}
            {todos.map((todo:todo) =>
                (<Item
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />))}
        </div>
    )
};

export default TodoList;
