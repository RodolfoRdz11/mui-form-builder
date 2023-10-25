import { ChangeEvent } from "react";
import { Theme } from "@mui/material";

declare module '@mui/styles' {
    interface DefaultTheme extends Theme { }
}

export type onChangeEventType = ChangeEvent<HTMLInputElement> | {
    target: {
        name: string
        value: any
    }
}

export interface InputPropsType<T = any> {
    label?: string
    placeholder?: string
    name: keyof T | any
    value?: any
    onChange?: (event: onChangeEventType) => void
    disabled?: boolean
    /**Custom error message */
    error?: string
    /**Indicates if input was focused */
    touched?: boolean
    options?: string[] | ({
        label: string
        value: string
    }[])
    config?: any
    className?: string
    inputRef?: any
}

export type InputTypes =
    'text'
    | 'select'
    | 'email'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'number'
    | 'textarea'
    | 'currency'
    | 'autocomplete'


export interface InputType<T = any> extends InputPropsType<T> {
    inputType: InputTypes
    required?: boolean
    hidden?: boolean
    row?: number
    width?: number
    mobileWidth?: number
}