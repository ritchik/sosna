import Box from '@mui/material/Box';
import { IconText } from '../../atoms/IconText';
import { IconBadge } from '../../atoms/IconBadge';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface StatRowProps {
    number: number;
    badgeIcon: React.ReactElement;
    title: string;
    leftIcon: React.ReactElement;
    leftText: string;
    rightIcon: React.ReactElement;
    rightText: string;
}

export function StatRow({
    number,
    badgeIcon,
    title,
    leftIcon,
    leftText,
    rightIcon,
    rightText
}: StatRowProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <Box
            sx={{
                width: '100%',
                padding: '18px',
                borderRadius: '10px',
                backgroundColor: palette.background.default,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
            }}
        >
            <Box
                sx={{
                    minWidth: '24px',
                    textAlign: 'right',
                }}
            >
                <span style={{ ...textStyles.Filling, color: palette.text.primary }}>
                    {number}
                </span>
            </Box>

            <IconBadge icon={badgeIcon} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    flex: 1,
                    gap: '8px',
                }}
            >
                <span style={{ ...textStyles.Filling, color: palette.text.primary }}>
                    {title}
                </span>
                <Box sx={{ display: 'flex', gap: '14px' }}>
                    <IconText
                        icon={leftIcon}
                        text={leftText}
                        variant="Comment"
                        color={palette.comment.main}
                    />
                    <IconText
                        icon={rightIcon}
                        text={rightText}
                        variant="Comment"
                        color={palette.comment.main}
                    />
                </Box>
            </Box>
        </Box>
    );
}