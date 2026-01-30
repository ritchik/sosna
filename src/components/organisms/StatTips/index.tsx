import Box from '@mui/material/Box';
import { ProductRankingWidget } from '../../molecules/StatItemWidget';
import { SalesTipWidget } from '../../molecules/SalesTipWidget';

export function RankingTipsRow() {
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
            <Box sx={{ flex: '1 1 400px', minWidth: '300px' }}>
                <ProductRankingWidget />
            </Box>
            <Box sx={{ flex: '1 1 400px', minWidth: '300px' }}>
                <SalesTipWidget />
            </Box>
        </Box>
    );
}