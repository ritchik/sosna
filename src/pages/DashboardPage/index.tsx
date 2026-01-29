import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DashboardLayout } from '../../components/templates/DashboardLayout';
import { Text } from '../../components/atoms/Text';
import { OrdersWidget } from '../../components/organisms/OrdersWidget';
import { SalesQualityWidget } from '../../components/organisms/SalesQualityWidget';
import { CustomerReviewsWidget } from '../../components/organisms/CustomerReviewsWidget';
import { SalesChartWidget } from '../../components/organisms/SalesChartWidget';
import { SalesTipWidget } from '../../components/organisms/SalesTipWidget';
import { useAuth } from '../../contexts/AuthContext';

export function DashboardPage() {
  const { t } = useTranslation();
  const { user, currentAccount } = useAuth();

  return (
    <DashboardLayout>
      <Box sx={{ mb: 3 }}>
        <Text variant="h4" weight="bold">{t('dashboard.title')}</Text>
        {user && currentAccount && (
          <Text color="text.secondary">
            {t('auth.welcome')}, {user.name} | {currentAccount.name}
          </Text>
        )}
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <OrdersWidget />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <SalesQualityWidget />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <CustomerReviewsWidget />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <SalesTipWidget />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SalesChartWidget />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
