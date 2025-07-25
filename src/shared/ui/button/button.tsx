import clsx from "clsx";
import type { TButton } from "./type";
import styles from './button.module.scss'

export const Button = ({
    onClick,
    color,
    width,
    children,
}: TButton) => (
    <button 
    onClick={onClick}
    color={color}
    style={{ maxWidth: width }}
    className={clsx(styles.button, styles[color])}
    >
    {children}
    </button>
)