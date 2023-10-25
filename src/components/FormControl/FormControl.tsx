import { FormHelperText, Grid, GridProps } from "@mui/material"
import { useStyles } from "./FormControl.styles"
import clsx from "clsx"

export type FormControlProps = Omit<GridProps, 'onChange'> & {
    /**
     * Error message to display
     */
    error?: string
    /**
     * If the input was 'touched' (focused, then blurred)
     */
    touched?: boolean
}

export function FormControl({ children, error, touched, className, ...rest }: FormControlProps) {
    const classes = useStyles()

    return (
        <Grid
            id="form-control"
            container
            className={clsx(classes.formControl, className)}
            {...rest}

        >
            {children}
            {Boolean(error) && touched && (
                <FormHelperText> {error} </FormHelperText>
            )}
        </Grid>
    )
}