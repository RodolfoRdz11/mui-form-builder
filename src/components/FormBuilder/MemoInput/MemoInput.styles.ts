import { TssStyles } from "src/types";
import { tss } from "tss-react/mui";

export const useStyles: TssStyles = tss.create(({ theme }) => ({
    labelWithHelp: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        '&  svg': {
            transform: 'scale(0.8)',
        },
        '& path': {
            fill: theme.palette.primary.main,
        },
        '& > div': {
            height: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        }
    }
}))