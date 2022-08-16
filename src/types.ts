import { ChangeEvent } from "react"

export interface InputPropsType {
    label?: string
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    /**Custom error message */
    error?: string
    /**Indicates if input was focused */
    touched?: boolean
}

export type InputTypes =
    'text'
    | 'select'
    | 'email'

export interface InputType extends InputPropsType {
    inputType: InputTypes
}