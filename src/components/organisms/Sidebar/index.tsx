import Box from '@mui/material/Box';
import { Logo } from '../../atoms/Logo';
import { Text } from '../../atoms/Text';
import { StatItem } from '../../molecules/StatItem';
import { Button } from '../../atoms/Button';

export const Sidebar = () => {
    return (
        <Box sx={{
            width: 240,
            height: '100vh',
            backgroundColor: 'white',
            borderRight: '1px solid #E0E0E0',
            padding: 2
        }}>
            {/* Logo */}
            <Box sx={{ padding: 2, marginBottom: 3 }}>
                <Logo variant="small" />
            </Box>

            {/* Navigation */}
            <Box>
                <Text variant="overline" sx={{ padding: 2, color: 'text.secondary' }}>
                    Orders
                </Text>
                <StatItem icon="ShoppingCart" label="Unpaid" count={92} badgeColor="warning" />
                <StatItem icon="LocalShipping" label="Not Shipped" count={11} badgeColor="error" />
                <StatItem icon="AssignmentReturn" label="Returns" count={3} badgeColor="info" />
            </Box>

            {/* View All */}
            <Box sx={{ padding: 2, marginTop: 2 }}>
                <Button customVariant="text" fullWidth>
                    View all
                </Button>
            </Box>
        </Box>
    );
};