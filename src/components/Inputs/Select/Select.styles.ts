import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create({
    label: {
        fontWeight: 500,
        marginBottom: 8
    },
    scrollbar: {
        border: '1px solid #CFD5E2',
        boxShadow: '0px 25px 50px rgba(208, 218, 232, 0.25)',
        borderRadius: 4,
        '&::-webkit-scrollbar': {
            width: 5,
            height: 5,
            borderRadius: 10,
            opacity: .8,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(117, 139, 183, 0.3)',
            borderRadius: 10,
        },
        '& li': {
            fontSize: 14
        }
    },
})