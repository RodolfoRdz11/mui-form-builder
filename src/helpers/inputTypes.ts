import { ElementType } from "react";
import { InputTypes } from "src/types";
import {
    TextInput,
    SelectInput,
    EmailInput,
    CheckInput,
    DateInput
} from "src/components/Inputs"
import { RadioInput } from "src/components/Inputs/Radio";

export const inputTypes: { [key in InputTypes]: ElementType } = Object.freeze({
    text: TextInput,
    select: SelectInput,
    email: EmailInput,
    check: CheckInput,
    date: DateInput,
    radio: RadioInput
})