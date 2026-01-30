import Box from '@mui/material/Box';
import { IconText } from '../../atoms/IconText';
import { Badge } from '../../atoms/Badge';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

type BadgeColor = 'Unpaid' | 'NotShipped' | 'Returns';

interface IconTextBadgeProps {
    icon: React.ReactElement;
    text: string;
    count?: number;
    badgeColor?: BadgeColor;
}

export function IconTextBadge({ icon, text, count, badgeColor = 'Unpaid' }: IconTextBadgeProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '18px',
                borderRadius: '10px',
                backgroundColor: palette.background.default,
            }}
        >
            <IconText icon={icon} text={text} variant="Label" />
            <Badge count={count} badgeColor={badgeColor} />
        </Box>
    );
}