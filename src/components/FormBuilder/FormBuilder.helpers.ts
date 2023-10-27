import _ from 'lodash'
import { InputType, InputTypes } from 'src/types'

export * as yup from 'yup'

export const DEFAULT_VALUES: { [key in InputTypes]: any } = Object.freeze({
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
    autocomplete: ""
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
    const prevValues: any = Object.assign({}, values)

    if (_.isEmpty(inputs)) return {}

    return inputs.reduce((a, v) => {
        let config_default_value = v?.config?.default_value
        let value = prevValues[v.name]
        value = (_.isUndefined(value) || _.isNull(value))
            ? config_default_value || DEFAULT_VALUES[v.inputType]
            : value

        return {
            ...a,
            [v.name]: value
        }
    }, {})
}