import Box from '@mui/material/Box';
import { Icon } from '../../atoms/Icon';
import { Badge } from '../../atoms/Badge';
import { Text } from '../../atoms/Text';

interface StatItemProps {
    icon: string;
    label: string;
    count: number;
    badgeColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export const StatItem = ({ icon, label, count, badgeColor = 'error' }: StatItemProps) => {
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
            <Icon name={icon as any} color="action" />
            <Text sx={{ flex: 1 }} weight="medium">
                {label}
            </Text>
            <Badge badgeContent={count} color={badgeColor} />
        </Box>
    );
};