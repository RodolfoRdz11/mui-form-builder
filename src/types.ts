import { ChangeEvent } from "react";
import { Theme } from "@mui/material";
import { tss } from "tss-react/mui";

// Infer the type returned by tss.create
export declare type TssStyles = ReturnType<typeof tss.create>;

export * from './components'

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
    onBlur?: (event: onChangeEventType) => void
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
    helper?: string
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
    | 'color'


export interface InputType<T = any> extends InputPropsType<T> {
    inputType: InputTypes
    required?: boolean
    hidden?: boolean
    row?: number
    width?: number
    mobileWidth?: number
}