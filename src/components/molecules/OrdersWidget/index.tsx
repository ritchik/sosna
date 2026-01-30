import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Package, Truck, RotateCcw, ShoppingCart } from 'lucide-react';
import { IconText } from '../../atoms/IconText';
import { Divider } from '../../atoms/Divider';
import { IconTextBadge } from '../Unpaid';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { useAuth } from '../../../contexts/AuthContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { ordersData } from '../../../data/mockData';
import { lightPalette, darkPalette } from '../../../contexts/colors';

export function OrdersWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentAccount } = useAuth();
  const { mode } = useTheme();

  const palette = mode === 'light' ? lightPalette : darkPalette;

  const orders = ordersData[currentAccount?.id || 'demo1'] || { unpaid: 0, notShipped: 0, returns: 0 };
  const hasOrders = orders.unpaid > 0 || orders.notShipped > 0 || orders.returns > 0;

  if (!hasOrders) {
    return (
      <Box
        sx={{
          backgroundColor: palette.widget.main,
          borderRadius: '10px',
          padding: '24px',
        }}
      >
        <Alert severity="info" sx={{ mb: 2 }}>{t('orders.noOrders')}</Alert>
        <Text color="text.secondary">{t('orders.noOrdersMessage')}</Text>
        <Button variant="primary" sx={{ mt: 2 }}>
          {t('orders.promoteOffers')}
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: palette.widget.main,
        borderRadius: '10px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <IconText
          icon={<ShoppingCart size={24} color="currentColor" />}
          text={t('orders.title')}
          variant="Label"
        />

        <Divider />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Box onClick={() => navigate('/orders?category=unpaid')} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
            <IconTextBadge
              icon={<Package size={24} color="currentColor" />}
              text={t('orders.unpaid')}
              count={orders.unpaid}
              badgeColor="Unpaid"
            />
          </Box>
          <Box onClick={() => navigate('/orders?category=notShipped')} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
            <IconTextBadge
              icon={<Truck size={24} color="currentColor" />}
              text={t('orders.notShipped')}
              count={orders.notShipped}
              badgeColor="NotShipped"
            />
          </Box>
          <Box onClick={() => navigate('/orders?category=returns')} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
            <IconTextBadge
              icon={<RotateCcw size={24} color="currentColor" />}
              text={t('orders.returns')}
              count={orders.returns}
              badgeColor="Returns"
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: 'auto' }}>
        <Button variant="onShadow" onClick={() => navigate('/orders')}>
          {t('common.viewAll')}
        </Button>
      </Box>
    </Box>
  );
}