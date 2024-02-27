import * as yup from 'yup'
import _ from 'lodash'
import { InputTypes } from 'src/types'

export const defaultValidations: { [key in InputTypes]: any } = {
    autocomplete: yup.string(),
    text: yup.string(),
    textarea: yup.string(),
    number: yup.number().min(1),
    currency: yup
        .number()
        .min(1, 'La cantidad debe ser mayor a 0')
        .max(99999999, 'La cantidad no puede ser mayor a 99,999,999'),
    select: yup.string(),
    radio: yup.string(),
    email: yup
        .string()
        .test('Validar @', 'Ingresa el @ entre el usuario y el dominio, ejemplo: user@email.com', (value) => {
            if ((value?.length || 0) > 0) {
                const splitEmail = value?.split('@')
                if ((splitEmail?.length || 0) < 2) {
                    return false
                }
            }
            return true
        })
        .test('Validar usuario', 'Ingresa el usuario antes del @, ejemplo: user@email.com', (value) => {
            if ((value?.length || 0) > 0) {
                if (value?.startsWith('@')) {
                    return false
                }
            }
            return true
        }).
        test('Validar dominio', 'Debe contener el "." después del dominio, ejemplo: user@email.com', (value) => {
            if ((value?.length || 0) > 0) {
                const splitEmail = value?.split('@')
                const [domain] = splitEmail?.slice(-1) || ['']
                if (domain.indexOf('.') === -1) {
                    return false
                }
            }
            return true
        })
        .email('Introduzca una dirección de correo electrónico válida'),
    checkbox: yup.bool(),
    date: yup.date(),
    password: yup.string().min(8, 'Contraseña debe de contener mínimo 8 caracteres'),
    color: yup.string(),
}

export function buildYupValidation(props: any) {
    const {
        key,
        field_type,
        label,
        required,
        config,
        field_validations,
        fieldValidations,
    } = props;

    const _fieldValidations = field_validations || fieldValidations || [];
    let validation = defaultValidations[field_type as keyof typeof defaultValidations]?.label(label)
    if (!validation) validation = yup.string();

    const isDate = ["birthdate", 'month_year', 'date'].includes(field_type)

    if (required && field_type === 'binary') {
        validation = validation.oneOf([true], 'Debes marcar la casilla de verificación')
            .required('Debes marcar la casilla de verificación')
    } if (required && field_type === 'phone' && validation?.fields?.phone) {
        validation.fields.phone = yup.string().required('Es un campo requerido')
    } else {
        validation = required
            ? validation.required(isDate ? 'Verifica que la fecha sea correcta.' : 'Es un campo requerido')
            : validation
    }

    if (shouldAnalizeRegexp(config)) {
        const { regex, regex_message } = config
        validation = validation.matches(new RegExp(regex), regex_message)
    }

    if (_.isEmpty(_fieldValidations)) {
        return validation
    }

    if (_fieldValidations?.length > 0) {
        _fieldValidations.forEach((fieldValidation: any) => {
            const { operator, value, message } = fieldValidation
            validation = generateValidation(
                validation,
                key,
                field_type,
                operator,
                value,
                message
            )
        })
        return validation
    }
}

function shouldAnalizeRegexp(config: any) {
    return !_.isEmpty(config?.regex)
}

function generateValidation(
    validation: any,
    key: any,
    fieldType: any,
    operator: any,
    value: any,
    message: any
) {
    /* WHEN THE CONDITION IS NOT TRUE, SHOW THE MESSAGE */

    const options = value.split('|')
    switch (operator) {
        case 'lte':
            return validation.moreThan(value, message)
        case 'lt':
            return validation.min(value, message)
        case 'gte':
            return validation.lessThan(value, message);
        case 'gt':
            return validation.max(value, message)
        case 'in_list':
            return validation.test(key, message, (_value: any) => !options.includes(_value))
        case 'not_in_list':
            return validation.test(key, message, (_value: any) => options.includes(_value))
        case 'eq':
            return validation.test(key, message, (_value: any) => !(_value === value))
        case 'not_eq':
            return validation.test(key, message, (_value: any) => (_value === value))
        // case 'between':
        // 	if (fieldType === 'date') {

        // 		const [from, to] = value.split('..')
        // 		return validation.test(key, message, (_value: any) => !moment(_value).isBetween(from, to))

        // 	} else if (fieldType === 'number') {

        // 		const [from, to] = value.split('..')
        // 		return validation.test(key, message, (_value: any) => !(Number(_value) >= Number(from) && Number(_value) <= Number(to)))

        // 	}
        // 	break
        // case 'not_between':
        // 	if (fieldType === 'date') {

        // 		const [from, to] = value.split('..')
        // 		return validation.test(key, message, (_value: any) => moment(_value).isBetween(from, to))

        // 	} else if (fieldType === 'number') {

        // 		const [from, to] = value.split('..')
        // 		return validation.test(key, message, (_value: any) => Number(_value) >= Number(from) && Number(_value) <= Number(to))

        // 	}
        // 	return
        default:
            return validation
    }
}