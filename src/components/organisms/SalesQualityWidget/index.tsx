import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Card } from '../../molecules/Card';
import { ListItem } from '../../molecules/ListItem';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { useAuth } from '../../../contexts/AuthContext';
import { getSalesQuality } from '../../../data/mockData';

export function SalesQualityWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentAccount } = useAuth();

  const quality = getSalesQuality(currentAccount?.id || 'demo1');

  const worstAspects = quality
    ? [...quality.aspects].sort((a, b) => a.score - b.score).slice(0, 3)
    : [];

  if (!quality) {
    return (
      <Card title={t('quality.title')}>
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Alert severity="info">{t('quality.noQuality')}</Alert>
          <Text color="text.secondary" sx={{ mt: 2 }}>{t('quality.noQualityMessage')}</Text>
        </Box>
      </Card>
    );
  }

  const percentage = Math.round((quality.totalScore / quality.maxScore) * 100);

  return (
    <Card
      title={t('quality.title')}
      footer={<Button variant="text" size="small" onClick={() => navigate('/quality')} sx={{ minWidth: 0, p: 0, textTransform: 'none', fontWeight: 400 }}>{t('common.viewAll')}</Button>}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Badge label={quality.category} color="primary" sx={{ fontSize: '1rem', py: 1, px: 2 }} />
        <Text variant="h6" sx={{ mt: 1 }}>
          {quality.totalScore} / {quality.maxScore} ({percentage}%)
        </Text>
      </Box>

      <Text variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {t('quality.areasToImprove')}:
      </Text>
      {worstAspects.map((aspect) => (
        <ListItem
          key={aspect.id}
          label={t(`quality.aspects.${aspect.name}`)}
          value={Math.round((aspect.score / aspect.maxScore) * 100)}
        />
      ))}
    </Card>
  );
}
