import { Grid, GridProps, Button, ButtonProps } from "@mui/material";

export interface FormBuilderActionsProps extends GridProps {
    submitLabel?: string
    cancelLabel?: string
    hideCancelButton?: boolean
    submitButtonProps?: ButtonProps
    cancelButtonProps?: ButtonProps
}

export function FormBuilderActions({
    submitLabel,
    cancelLabel,
    hideCancelButton,
    submitButtonProps,
    cancelButtonProps,
    ...rest
}: FormBuilderActionsProps) {
    return (
        <Grid
            id="form-builder-actions-container"
            item
            xs={12}
            container
            direction='row'
            justifyContent="space-between"
            style={{ marginTop: 16 }}
            {...rest}
        >
            {!hideCancelButton && (
                <Button {...cancelButtonProps}>
                    {cancelLabel || "Cancelar"}
                </Button>
            )}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                {...submitButtonProps}
            >
                {submitLabel || "Guardar"}
            </Button>
        </Grid>
    )
}