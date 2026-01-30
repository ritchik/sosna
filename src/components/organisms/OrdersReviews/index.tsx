import Box from '@mui/material/Box';
import { OrdersWidget } from '../../molecules/OrdersWidget';
import { CustomerReviewsWidget } from '../../molecules/CustomerReviewsWidget';
import { SalesQualityWidget } from '../../organisms/SalesQualityWidget';

export function OrdersReviews() {
    return (
        <Box
            sx={{
                maxWidth: '1880px',
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                alignItems: 'stretch',
            }}
        >
            <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <OrdersWidget />
            </Box>
            <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <SalesQualityWidget />
            </Box>
            <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
                <CustomerReviewsWidget />
            </Box>
        </Box>
    );
}