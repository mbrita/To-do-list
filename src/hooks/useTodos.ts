import {todo} from "../types/types";
import {useMemo} from "react";


export const useTodos = (
    todos: todo[],
    filter?: string,
) => {
    return useMemo(() => {
        switch (filter) {
            case 'active':
                return [...todos].filter((todo:todo)=>!todo.isCompleted)
            case 'completed':
                return [...todos].filter((todo:todo)=>todo.isCompleted)
            default:
                return todos;
        }
    }, [filter, todos]);
}
