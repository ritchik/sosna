import Box from '@mui/material/Box';
import { Card } from '../../molecules/Card';
import { StatItem } from '../../molecules/StatItem';
import { Button } from '../../atoms/Button';

export const OrdersWidget = () => {
    return (
        <Card
            title="Orders"
            action={
                <Button customVariant="text" size="small">
                    View all
                </Button>
            }
        >
            <Box>
                <StatItem icon="ShoppingCart" label="Unpaid" count={92} badgeColor="warning" />
                <StatItem icon="LocalShipping" label="Not Shipped" count={11} badgeColor="error" />
                <StatItem icon="AssignmentReturn" label="Returns" count={3} badgeColor="info" />
            </Box>
        </Card>
    );
};