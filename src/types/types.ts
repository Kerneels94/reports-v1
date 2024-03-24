import {ReactNode} from "react";

/**
 * @description: Types for the application
 */

export type Props = {
    children: ReactNode;
}

/**
 * @description: Theme context type
 */
export type ThemeContextType = {
    theme: "light" | "dark";
    setTheme: (theme: string) => void;
}