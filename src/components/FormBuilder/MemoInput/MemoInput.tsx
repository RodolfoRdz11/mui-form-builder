import { Fragment, useMemo } from "react";
import { InputType } from "src/types";
import { inputTypes } from "../FormBuilder.helpers";
import { useFormBuilderContext } from "../FormBuilder.context";
import _ from "lodash"

interface MemoInputProps extends InputType {
    inputRef: any
    control: any
}

export function MemoInput({ inputType, inputRef, control, ...props }: MemoInputProps) {
    const { options } = props
    const { currentValues, errors, touched } = useFormBuilderContext()

    const Component = useMemo(() => (
        inputTypes[inputType]
    ), [])

    if (!Component)
        return <Fragment />

    const inputProps = {
        ...props,
        value: _.get(currentValues, props.name),
        error: _.get(errors, props.name),
        touched: _.get(touched, props.name)
    }

    return useMemo(() => (
        <Component
            ref={inputRef}
            inputRef={inputRef}
            control={control}
            {...props}
            {...inputProps}
        />
    ), [
        inputProps.value,
        inputProps.error,
        inputProps.touched,
        inputProps.onChange,
        options,
        inputType,
    ])
}