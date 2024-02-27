import _ from 'lodash'
import { ComponentType } from 'react'
import { InputType, InputTypes } from 'src/types'
import * as yup from 'yup'
import { buildYupValidation } from './FormBuilder.validations'

export const defaultValues: { [key in InputTypes]: any } = Object.freeze({
    text: "",
    number: 0,
    select: "",
    email: "",
    password: "",
    checkbox: false,
    radio: "",
    date: new Date(),
    textarea: "",
    currency: "",
    autocomplete: "",
    binary: false,
    color: '#000000'
})

/**
 * Orders inputs by row and sort_order
 * @param inputs 
 * @returns 
 */
export function groupInputsByRow(inputs: InputType[]): {
    inputs: InputType[]
}[] {
    if (_.isEmpty(inputs)) return []

    const groupedByRow: any = _.chain(inputs)
        .groupBy('row')
        .value()

    const orderedinputs = Object.keys(groupedByRow).map((key) => {
        return {
            inputs: _.orderBy(
                groupedByRow[key],
                'sort_order',
                'asc'
            )
        }
    })

    return orderedinputs;
}

/**
 * Returns the initial values for the form in the format { [key]: value }
 * @param inputs 
 * @param values Key value object with field key and value
 * @returns 
 */
export function getInitialValues(inputs: InputType[], values?: any) {
    const prevValues = Object.assign({}, values)

    if (_.isEmpty(inputs)) return null

    return inputs.reduce((a, v) => {
        const config_default_value = v?.config?.default_value
        let value = prevValues[v.name]
        value = (_.isUndefined(value) || _.isNull(value))
            ? config_default_value || defaultValues[v.inputType]
            : value

        return {
            ...a,
            [v.name]: value
        }
    }, {})
}

/**
 * Returns a yup validation schema for the given fields
 * @param fields 
 * @returns 
 */
export function getValidationSchema(fields: Array<any>) {
    if (_.isEmpty(fields)) return yup.object({})

    const validations = fields.reduce((a, v) => ({
        ...a,
        [v.name]: buildYupValidation(v)
    }), {})

    return yup.object(validations)
}

/**
 * Inputs object with component
 */
export const inputTypes: { [key in InputTypes]: ComponentType<any> } = {
    text: require('../Inputs/Text').TextInput,
    number: require('../Inputs/Text').TextInput,
    select: require('../Inputs/Select').SelectInput,
    email: require('../Inputs/Email').EmailInput,
    password: require('../Inputs/Password').PasswordInput,
    checkbox: require('../Inputs/Check').CheckInput,
    radio: require('../Inputs/Radio').RadioInput,
    date: require('../Inputs/Date').DateInput,
    textarea: require('../Inputs/Text').TextAreaInput,
    currency: require('../Inputs/Currency').CurrencyInput,
    autocomplete: require('../Inputs/Autocomplete').AutocompleteInput,
    color: require('../Inputs/ColorPicker').ColorPickerInput,
}