import React, {FC, FormEventHandler, useState} from 'react';
import Button from "../UI/Button";
import cls from './Form.module.scss'

interface FormProps {
    addItem: (nameTodo: string) => void
}

const Form: FC<FormProps> = ({addItem}) => {

    const [nameTodo, setNameTodo] = useState('')
    const onSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addItem(nameTodo)
        setNameTodo('')
    }
    return (
        <form onSubmit={onSubmitHandler} className={cls.Form}>
            <input
                className={cls.inputText}
                placeholder='What needs to be done?'
                value={nameTodo}
                onChange={(e) => setNameTodo(e.target.value)}
            />
            <Button
                data-testid={"add new todo btn"}
                className={cls.btn}
                title="add new todo"
            >
                <i className="fa-solid fa-check"></i>
            </Button>
        </form>
    );
};

export default Form
