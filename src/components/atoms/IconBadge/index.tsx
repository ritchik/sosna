import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface IconBadgeProps {
    icon: React.ReactElement;
}

export function IconBadge({ icon }: IconBadgeProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '22px',
                borderRadius: '10px',
                backgroundColor: palette.primary.main,
            }}
        >
            {icon}
        </span>
    );
}