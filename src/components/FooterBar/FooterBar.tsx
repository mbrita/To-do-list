import React, {FC, useState} from 'react';
import cls from './FooterBar.module.scss';
import Button from '../UI/Button';

interface FooterBar {
    completedTodosCount: number;
    filtering: (filter: string) => void;
    clearCompleted: () => void;
}

const FooterBar: FC<FooterBar> = (props) => {
    const {
        completedTodosCount,
        filtering,
        clearCompleted
    } = props

    const [active, setActive] = useState('');

    const buttonHandler = (filter: string) => {
        filtering(filter);
        setActive(filter);
    };

    return (
        <div className={cls.footerBar}>
            {completedTodosCount > 0 && (
                <p className={cls.countTodos}>
                    {`completed ${completedTodosCount} ${
                        completedTodosCount > 1 ? 'todos' : 'todo'
                    }`}
                </p>
            )}
            <div className={cls.filterButtons}>
                <Button
                    className={
                        active === '' ? cls.activeBtn : cls.btn
                    }
                    onClick={() => buttonHandler('')}
                >
                    all
                </Button>
                <Button
                    className={active === 'active' ? cls.activeBtn : cls.btn}
                    data-testid={'show active items'}
                    onClick={() => buttonHandler('active')}
                >
                    active
                </Button>
                <Button
                    className={
                        active === 'completed' ? cls.activeBtn : cls.btn
                    }
                    data-testid={'show completed items'}
                    onClick={() => buttonHandler('completed')}
                >
                    completed
                </Button>
            </div>
            <Button
                className={cls.btnClearCompleted}
                data-testid={'clear completed Todos'}
                onClick={clearCompleted}
                title="Clear Completed Todos"
                disabled={!completedTodosCount}
            >
                clear completed
            </Button>
        </div>
    );
};

export default FooterBar;
