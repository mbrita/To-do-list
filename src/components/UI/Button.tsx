import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    disabled?: boolean,
}

const Button: FC<ButtonProps> = (props) => {
    const {children, disabled = false, className} = props
    return <button
        {...props}
        className={`${cls.btn} ${className}`}
        disabled={disabled}
    >
        {children}
    </button>
}

export default Button
