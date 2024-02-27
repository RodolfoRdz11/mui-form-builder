import { FormEvent } from "react";
import { Grid } from "@mui/material";
import { FormBuilderContext } from "./FormBuilder.context";
import { InputType } from "src/types";
import { useFormik } from "formik";
import _ from "lodash"

import { MemoInput } from "./MemoInput";
import { groupInputsByRow } from "./FormBuilder.helpers";
import { FormBuilderActions, FormBuilderActionsProps } from "./Actions";

export interface FormBuilderProps<T> {
    inputs: InputType[]
    initialValues?: T
    validationSchema?: any
    onSubmit: (data: T | Object) => void
    actionsProps?: FormBuilderActionsProps
    inputClassName?: string
}

export function FormBuilder<T>({
    inputs,
    initialValues,
    validationSchema,
    onSubmit,
    actionsProps,
    inputClassName
}: FormBuilderProps<T>) {
    const { submitButtonProps, ...restActionsProps } = actionsProps || {}

    const formik = useFormik({
        initialValues: initialValues || {},
        validationSchema,
        onSubmit,
        enableReinitialize: true,
    })

    const {
        handleChange,
        handleBlur,
        submitForm,
        isValid,
        values,
    } = formik

    const disableSubmit = !isValid

    return (
        <FormBuilderContext.Provider
            value={{
                currentValues: values,
                errors: formik?.errors,
                touched: formik?.touched,
            }}
        >
            <form
                id="form-builder"
                noValidate
                autoComplete="off"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    submitForm()
                }}
            >
                <Grid
                    id="form-builder-inputs-container"
                    container
                    rowGap={3}
                >
                    {groupInputsByRow(inputs).map((row, rowIndex) => (
                        <Grid
                            id="form-builder-inputs-row"
                            key={rowIndex}
                            container
                            spacing={2}
                        >
                            {row.inputs
                                .filter(input => !input.hidden)
                                .map((input, inputIndex) => (
                                    <Grid
                                        id="form-builder-inputs-col"
                                        key={inputIndex}
                                        item
                                        xs={input.mobileWidth || 12}
                                        md={input.width || 12}
                                    >
                                        <MemoInput
                                            className={inputClassName}
                                            {...input}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                )
                                )}
                        </Grid>
                    ))}

                    <FormBuilderActions
                        {...restActionsProps}
                        submitButtonProps={{
                            disabled: disableSubmit || submitButtonProps?.disabled,
                            ...submitButtonProps
                        }}
                    />

                </Grid>
            </form>
        </FormBuilderContext.Provider>
    )
}