import { InputTypes } from "src/types";

import {
    AutocompleteInput,
    DateInput,
    EmailInput,
    PasswordInput,
    RadioInput,
    SelectInput,
    TextAreaInput,
    TextInput,
    ColorPickerInput
} from "../components/Inputs";

export const inputTypes: { [key in InputTypes]: any } = Object.freeze({
    text: TextInput,
    number: TextInput,
    select: SelectInput,
    email: EmailInput,
    password: PasswordInput,
    checkbox: TextInput,
    color: ColorPickerInput,
    radio: RadioInput,
    date: DateInput,
    textarea: TextAreaInput,
    currency: TextInput,
    autocomplete: AutocompleteInput,
})