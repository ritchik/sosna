import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Card } from '../../molecules/Card';
import { StatItem } from '../../molecules/StatItem';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { useAuth } from '../../../contexts/AuthContext';
import { ordersData } from '../../../data/mockData';

export function OrdersWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentAccount } = useAuth();

  const orders = ordersData[currentAccount?.id || 'demo1'] || { unpaid: 0, notShipped: 0, returns: 0 };
  const hasOrders = orders.unpaid > 0 || orders.notShipped > 0 || orders.returns > 0;

  return (
    <Card
      title={t('orders.title')}
      footer={<Button variant="text" size="small" onClick={() => navigate('/orders')} sx={{ minWidth: 0, p: 0, textTransform: 'none', fontWeight: 400 }}>{t('common.viewAll')}</Button>}
    >
      {hasOrders ? (
        <Box>
          <Box onClick={() => navigate('/orders?category=unpaid')} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
            <StatItem label={t('orders.unpaid')} count={orders.unpaid} color="warning" />
          </Box>
          <Box onClick={() => navigate('/orders?category=notShipped')} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
            <StatItem label={t('orders.notShipped')} count={orders.notShipped} color="error" />
          </Box>
          <Box onClick={() => navigate('/orders?category=returns')} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
            <StatItem label={t('orders.returns')} count={orders.returns} color="info" />
          </Box>
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Alert severity="info" sx={{ mb: 2 }}>{t('orders.noOrders')}</Alert>
          <Text color="text.secondary">{t('orders.noOrdersMessage')}</Text>
          <Button variant="primary" size="small" sx={{ mt: 2 }}>
            {t('orders.promoteOffers')}
          </Button>
        </Box>
      )}
    </Card>
  );
}
