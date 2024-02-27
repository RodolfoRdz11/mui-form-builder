import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(({ theme }) => ({
    tooltip: {
        opacity: '.9 !important',
        top: '0 !important',
    },
    chilrenContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-end',
        }
    }
}));
