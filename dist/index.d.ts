import { ButtonHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare function Button({ children, variant, color, customColor, size, rounded, className, style, ...props }: ButtonProps): JSX.Element;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "violet";
    customColor?: string;
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
}

export { }
