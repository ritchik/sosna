import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Lightbulb } from 'lucide-react';
import { Card } from '../../molecules/Card';
import { Text } from '../../atoms/Text';

export function SalesTipWidget() {
    const { t } = useTranslation();

    // Simple random tip selection (1-3)
    // In a real app, this might rotate functionality or fetch from API
    const randomTipId = Math.floor(Math.random() * 3) + 1;
    const tipKey = `tips.tip${randomTipId}` as const;

    return (
        <Card title={t('tips.title')}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', p: 1 }}>
                <Box sx={{
                    display: 'flex',
                    p: 1.5,
                    borderRadius: 1,
                    bgcolor: 'primary.soft', // Assuming such a token exists or fallback to light primary
                    color: 'primary.main',
                    alignSelf: 'flex-start'
                }}>
                    {/* Fallback styling if theme tokens aren't exact, using standard logic */}
                    <Lightbulb size={24} />
                </Box>
                <Box>
                    <Text weight="bold" sx={{ mb: 0.5 }}>
                        {t(`${tipKey}.title`)}
                    </Text>
                    <Text color="text.secondary" variant="body2">
                        {t(`${tipKey}.description`)}
                    </Text>
                </Box>
            </Box>
        </Card>
    );
}
