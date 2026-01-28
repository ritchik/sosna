import Box from '@mui/material/Box';
import { Rating } from '../../atoms/Rating';
import { Text } from '../../atoms/Text';

interface ReviewItemProps {
    rating: number;
    author: string;
    date: string;
    text: string;
}

export const ReviewItem = ({ rating, author, date, text }: ReviewItemProps) => {
    return (
        <Box sx={{
            padding: 2,
            borderBottom: '1px solid #E0E0E0',
            '&:last-child': {
                borderBottom: 'none'
            }
        }}>
            <Rating value={rating} size="small" />
            <Box sx={{ display: 'flex', gap: 1, marginTop: 0.5, marginBottom: 0.5 }}>
                <Text variant="body2" weight="bold">
                    {author}
                </Text>
                <Text variant="body2" color="text.secondary">
                    {date}
                </Text>
            </Box>
            <Text variant="body2" color="text.secondary">
                {text}
            </Text>
        </Box>
    );
};