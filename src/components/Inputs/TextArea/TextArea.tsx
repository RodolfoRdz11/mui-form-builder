import { TextInput, TextInputProps } from "..";

type TextAreaInputProps = TextInputProps

export function TextAreaInput(props: TextAreaInputProps) {
    return (
        <TextInput
            multiline
            rows={4}
            {...props}
        />
    )
}