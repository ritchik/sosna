// src/pages/DashboardPage/index.tsx
import { Heading } from '../../components/atoms/Heading';
import Grid from '@mui/material/Grid';
import { DashboardLayout } from '../../components/templates/DashboardLayout';
import { OrdersWidget } from '../../components/organisms/OrdersWidget';
import { CustomerReviewsWidget } from '../../components/organisms/CustomerReviewsWidget';
import { SalesChartWidget } from '../../components/organisms/SalesChartWidget';

export const DashboardPage = () => {
    return (
        <DashboardLayout>
            <Heading variant="h3" sx={{ marginBottom: 3 }}>
                Dashboard
            </Heading>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <OrdersWidget />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <CustomerReviewsWidget />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <SalesChartWidget />
                </Grid>
            </Grid>
        </DashboardLayout>
    );
};