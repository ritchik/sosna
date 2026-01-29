import Box from '@mui/material/Box';
import { Text } from '../../atoms/Text';
import { Rating } from '../../atoms/Rating';

interface ReviewItemProps {
  rating: number;
  author: string;
  date: string;
  text?: string;
}

export function ReviewItem({ rating, author, date, text }: ReviewItemProps) {
  return (
    <Box sx={{ py: 1.5, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { border: 0 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
        <Rating value={rating} size="small" />
        <Text variant="body2" weight="medium">{author}</Text>
        <Text variant="caption" color="text.secondary">{date}</Text>
      </Box>
      {text && <Text variant="body2" color="text.secondary">{text}</Text>}
    </Box>
  );
}
