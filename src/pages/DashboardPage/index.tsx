import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { DashboardLayout } from '../../components/templates/DashboardLayout';
import { OrdersReviews } from '../../components/organisms/OrdersReviews';
import { RankingTipsRow } from '../../components/organisms/StatTips';
import { SalesChartWidget } from '../../components/organisms/SalesChartWidget';

export function DashboardPage() {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
        }}
      >
        <OrdersReviews />
        <RankingTipsRow />
        <SalesChartWidget />
      </Box>
    </DashboardLayout>
  );
}
