import Box from '@mui/material/Box';
import { Heading } from '../../components/atoms/Heading';
import Grid from '@mui/material/Grid';

import { Header } from '../../components/organisms/Header';
import { Sidebar } from '../../components/organisms/Sidebar';
import { OrdersWidget } from '../../components/organisms/OrdersWidget';
import { CustomerReviewsWidget } from '../../components/organisms/CustomerReviewsWidget';
import { SalesQualityWidget } from '../../components/organisms/SalesQualityWidget';
import { ProductRankingWidget } from '../../components/organisms/ProductRankingWidget';
import { SalesTipsWidget } from '../../components/organisms/SalesTipsWidget';
import { SalesChartWidget } from '../../components/organisms/SalesChartWidget';

export const OrganismsShowcase = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Header />

                {/* Dashboard Content */}
                <Box sx={{ flex: 1, padding: 3, backgroundColor: '#F5F5F5' }}>
                    <Heading variant="h3" sx={{ marginBottom: 3 }}>
                        Dashboard
                    </Heading>

                    <Grid container spacing={3}>
                        {/* Row 1 */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <OrdersWidget />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <SalesQualityWidget />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <CustomerReviewsWidget />
                        </Grid>

                        {/* Row 2 */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductRankingWidget />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <SalesTipsWidget />
                        </Grid>

                        {/* Row 3 - Full Width Chart */}
                        <Grid size={{ xs: 12 }}>
                            <SalesChartWidget />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};