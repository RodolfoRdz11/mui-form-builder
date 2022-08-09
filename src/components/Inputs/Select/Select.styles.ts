import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    label: {
        fontWeight: 500,
        marginBottom: 8
    },
    scrollbar: {
        '&::-webkit-scrollbar': {
            width: 5,
            height: 5,
            borderRadius: 10,
            opacity: .8,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(117, 139, 183, 0.3)',
            borderRadius: 10,
        }
    },
})