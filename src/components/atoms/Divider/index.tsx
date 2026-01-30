import MuiDivider, { type DividerProps as MuiDividerProps } from '@mui/material/Divider';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface DividerProps extends MuiDividerProps {
    thickness?: number;
}

export function Divider({ thickness = 1, sx, ...props }: DividerProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <MuiDivider
            sx={{
                borderColor: palette.divider,
                borderBottomWidth: thickness,
                ...sx,
            }}
            {...props}
        />
    );
}
