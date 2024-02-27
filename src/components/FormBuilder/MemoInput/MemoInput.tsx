import { Fragment, useMemo } from "react";
import { InputType } from "src/types";
import { inputTypes } from "../FormBuilder.helpers";
import { useFormBuilderContext } from "../FormBuilder.context";
import { Tooltip } from "src/components";
import HelpIcon from "src/assets/icons/help.svg"
import _ from "lodash"
import { useStyles } from "./MemoInput.styles";

interface MemoInputProps extends InputType { }

export function MemoInput({ inputType, ...props }: MemoInputProps) {
    const { classes, cx } = useStyles()
    const { options, helper } = props
    const { currentValues, errors, touched } = useFormBuilderContext()

    const Component = useMemo(() => (
        inputTypes[inputType]
    ), [inputType])

    const inputProps = useMemo(() => ({
        ...props,
        value: _.get(currentValues, props.name),
        error: _.get(errors, props.name),
        touched: _.get(touched, props.name)
    }), [props, currentValues, errors, touched])

    return useMemo(() => {
        if (!Component) {
            return <Fragment />
        }

        return (
            <Component
                {...props}
                {...{
                    ...inputProps,
                    label: helper ? (
                        <div className={classes.labelWithHelp}>
                            {inputProps.label}
                            <Tooltip title={helper}>
                                <HelpIcon />
                            </Tooltip>
                        </div>
                    ) : inputProps.label
                }}

            />
        )
    }, [
        Component,
        inputProps.value,
        inputProps.error,
        inputProps.touched,
        inputProps.onChange,
        options,
        inputType,
    ])
}