import { ElementType } from "react";
import { InputTypes } from "src/types";
import {
    TextInput,
    SelectInput,
    EmailInput
} from "src/components/Inputs"

export const inputTypes: { [key in InputTypes]: ElementType } = Object.freeze({
    text: TextInput,
    select: SelectInput,
    email: EmailInput
})