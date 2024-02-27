import { useMediaQuery, useTheme } from "@mui/material";

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Use to know if device in use is mobile (or resolution window is mobile) */
export function useIsMobile(breakpoint: BreakpointType = 'sm') {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint));
}