import Box from '@mui/material/Box';
import { Button } from '../Button';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface BannerButtonProps {
    title: string;
    buttonText: string;
    onClick?: () => void;
}

export function BannerButton({ title, buttonText, onClick }: BannerButtonProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <Box
            sx={{
                width: '100%',
                padding: '24px',
                paddingTop: '80px',
                borderRadius: '10px',
                background: `linear-gradient(90deg, ${palette.primary.main}33, ${palette.secondary.main}33)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '40px',
            }}
        >
            <span style={{ ...textStyles.Label, color: palette.text.primary }}>
                {title}
            </span>
            <Button variant="text" onClick={onClick}>
                {buttonText}
            </Button>
        </Box>
    );
}