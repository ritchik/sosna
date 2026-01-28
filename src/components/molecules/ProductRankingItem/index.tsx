import Box from '@mui/material/Box';
import { Avatar } from '../../atoms/Avatar';
import { Icon } from '../../atoms/Icon';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';

interface ProductRankingItemProps {
    rank: number;
    icon: string;
    name: string;
    quantity: string;
    value: string;
}

export const ProductRankingItem = ({ rank, icon, name, quantity, value }: ProductRankingItemProps) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: 1.5,
            '&:hover': {
                backgroundColor: '#F5F5F5',
                borderRadius: 1,
            }
        }}>
            <Heading variant="h6" sx={{ minWidth: 20 }}>
                {rank}
            </Heading>

            <Avatar>
                <Icon name={icon as any} color="white" />
            </Avatar>

            <Box sx={{ flex: 1 }}>
                <Text variant="body1" weight="medium">
                    {name}
                </Text>
                <Box sx={{ display: 'flex', gap: 2, marginTop: 0.5 }}>
                    <Text variant="body2" color="text.secondary">
                        📦 {quantity}
                    </Text>
                    <Text variant="body2" color="text.secondary">
                        💰 {value}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};