import Box from '@mui/material/Box';
import { Star } from 'lucide-react';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface ReviewCardProps {
    rating: number;
    date: string;
    author: string;
    text: string;
}

export function ReviewCard({ rating, date, author, text }: ReviewCardProps) {
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
                flexDirection: 'column',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: '4px' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                            key={i}
                            size={16}
                            fill={i <= rating ? palette.alert.main : 'transparent'}
                            color={i <= rating ? palette.alert.main : palette.shadow.main}
                        />
                    ))}
                </Box>
                <span style={{ ...textStyles.Comment, color: palette.comment.main }}>{date}</span>
            </Box>

            <span style={{ ...textStyles.Comment, color: palette.text.primary, marginTop: '8px' }}>
                {author}
            </span>
            <span style={{ ...textStyles.Filling, color: palette.text.primary, marginTop: '8px' }}>
                {text}
            </span>
        </Box>
    );
}