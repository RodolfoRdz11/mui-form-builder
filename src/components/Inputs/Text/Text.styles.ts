import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create({
    label: {
        fontWeight: 500,
        marginBottom: 8
    }
})