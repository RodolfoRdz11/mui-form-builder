import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(() => ({
    formControl: {
        display: 'flex',
        flexDirection: 'column'
    }
}))