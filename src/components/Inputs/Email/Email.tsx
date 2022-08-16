import { TextInput, TextInputProps } from "../Text"

export type EmailInputProps = TextInputProps

export function EmailInput(props: EmailInputProps) {
    return (
        <TextInput
            autoCapitalize="off"
            type="email"
            autoComplete="email"
            {...props}
        />
    )
}