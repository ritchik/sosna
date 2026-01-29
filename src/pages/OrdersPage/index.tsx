import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { DashboardLayout } from '../../components/templates/DashboardLayout';
import { Text } from '../../components/atoms/Text';
import { Button } from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';

export function OrdersPage() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const category = searchParams.get('category');

    return (
        <DashboardLayout>
            <Box sx={{ mb: 3 }}>
                <Button variant="text" onClick={() => navigate('/dashboard')} sx={{ mb: 2, pl: 0 }}>
                    &larr; {t('common.back')}
                </Button>
                <Text variant="h4" weight="bold">{t('orders.pageTitle')}</Text>
                {category && (
                    <Text variant="h6" color="text.secondary" sx={{ mt: 1 }}>
                        {t('orders.showingCategory')}: {t(`orders.${category}`)}
                    </Text>
                )}
            </Box>

            <Box sx={{ p: 4, textAlign: 'center', bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
                <Text variant="body1" color="text.secondary">
                    {/* Placeholder content as requested */}
                    {t('common.noData')}
                </Text>
            </Box>
        </DashboardLayout>
    );
}
