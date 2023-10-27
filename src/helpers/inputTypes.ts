import { InputTypes } from "src/types";

import {
    AutocompleteInput,
    DateInput,
    EmailInput,
    PasswordInput,
    RadioInput,
    SelectInput,
    TextAreaInput,
    TextInput
} from "../components/Inputs";

export const inputTypes: { [key in InputTypes]: any } = Object.freeze({
    text: TextInput,
    number: TextInput,
    select: SelectInput,
    email: EmailInput,
    password: PasswordInput,
    checkbox: TextInput,
    radio: RadioInput,
    date: DateInput,
    textarea: TextAreaInput,
    currency: TextInput,
    autocomplete: AutocompleteInput,
})