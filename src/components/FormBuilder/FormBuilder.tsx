import { FormEvent } from "react";
import { Grid } from "@mui/material";
import { FormBuilderContext } from "./FormBuilder.context";
import { InputType } from "src/types";
import { useForm } from "react-hook-form";
import _ from "lodash"

import { MemoInput } from "./MemoInput";
import { groupInputsByRow } from "./FormBuilder.helpers";
import { FormBuilderActions, FormBuilderActionsProps } from "./Actions";

export interface FormBuilderProps {
    inputs: InputType[]
    initialValues?: any
    validationSchema?: any
    onSubmit: (data: any) => void
    actionsProps?: FormBuilderActionsProps
    inputClassName?: string
}

export function FormBuilder({
    inputs,
    initialValues,
    validationSchema,
    onSubmit,
    actionsProps,
    inputClassName
}: FormBuilderProps) {

    const { register, handleSubmit, formState, watch, control } = useForm({
        defaultValues: initialValues,
        resolver: validationSchema,
    })
    // console.log("values", watch())
    return (
        <FormBuilderContext.Provider
            value={{
                currentValues: watch(),
                errors: formState.errors,
                touched: formState.touchedFields,
            }}
        >
            <form
                id="form-builder"
                noValidate
                autoComplete="off"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    handleSubmit(onSubmit)()
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
                                .map((input, inputIndex) => {
                                    const registerProps = register(input.name, {
                                        // required: input.required,
                                    })

                                    return (
                                        <Grid
                                            id="form-builder-inputs-col"
                                            key={inputIndex}
                                            item
                                            xs={input.mobileWidth || 12}
                                            md={input.width || 12}
                                        >
                                            <MemoInput
                                                inputRef={registerProps.ref}
                                                className={inputClassName}
                                                control={control}
                                                {...input}
                                                {...registerProps}
                                            />
                                        </Grid>
                                    )
                                })}
                        </Grid>
                    ))}

                    <FormBuilderActions
                        {...actionsProps}
                    />

                </Grid>
            </form>
        </FormBuilderContext.Provider>
    )
}