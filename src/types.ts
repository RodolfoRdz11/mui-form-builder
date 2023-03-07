import { ChangeEvent } from "react"

export type onChangeEventType = ChangeEvent<HTMLInputElement> | {
    target: {
        name: string
        value: any
    }
}

export interface InputPropsType {
    label?: string
    name: string
    value: any
    onChange: (event: onChangeEventType) => void
    disabled?: boolean
    /**Custom error message */
    error?: string
    /**Indicates if input was focused */
    touched?: boolean
    options?: string[] | ({
        label: string
        value: string
    }[])
}

export type InputTypes =
    'text'
    | 'select'
    | 'email'

export interface InputType extends InputPropsType {
    inputType: InputTypes
}