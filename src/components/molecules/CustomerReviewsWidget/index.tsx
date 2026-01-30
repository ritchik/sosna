import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Star } from 'lucide-react';
import { ReviewCard } from '../ReviewCard';
import { IconText } from '../../atoms/IconText';
import { Divider } from '../../atoms/Divider';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { useAuth } from '../../../contexts/AuthContext';
import { reviewsData, getAverageRating } from '../../../data/mockData';
import { useTheme } from '../../../contexts/ThemeContext';
import { lightPalette, darkPalette } from '../../../contexts/colors';

type Filter = 'all' | 'positive' | 'negative';

export function CustomerReviewsWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentAccount } = useAuth();
  const { mode } = useTheme();

  const palette = mode === 'light' ? lightPalette : darkPalette;

  const [filter, setFilter] = useState<Filter>('all');

  const reviews = reviewsData[currentAccount?.id || 'demo1'] || [];
  const avgRating = getAverageRating(reviews);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('reviews.filter.all') },
    { key: 'positive', label: t('reviews.filter.positive') },
    { key: 'negative', label: t('reviews.filter.negative') },
  ];

  const filtered = reviews
    .filter((r) => filter === 'all' || r.type === filter)
    .slice(0, 3);

  if (reviews.length === 0) {
    return (
      <Box
        sx={{
          backgroundColor: palette.widget.main,
          borderRadius: '10px',
          padding: '24px',
        }}
      >
        <Alert severity="info">{t('reviews.noReviews')}</Alert>
        <Text color="text.secondary" sx={{ mt: 2 }}>{t('reviews.noReviewsMessage')}</Text>
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconText
            icon={<Star size={24} color="currentColor" />}
            text={t('reviews.title')}
            variant="Label"
          />
          <IconText
            icon={<Star size={24} color="currentColor" fill={palette.alert.main} />}
            text={avgRating.toString()}
            variant="Label"
            color={palette.alert.main}
          />
        </Box>

        <Divider />

        <Box sx={{ display: 'flex', gap: '8px' }}>
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? 'primary' : 'secondary'}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filtered.length > 0 ? (
            filtered.map((review) => (
              <ReviewCard
                key={review.id}
                rating={review.rating}
                date={review.date || ''}
                author={review.author || ''}
                text={review.text || ''}
              />
            ))
          ) : (
            <Text color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
              {t('common.noData')}
            </Text>
          )}
        </Box>
      </Box>

      <Box sx={{ marginTop: 'auto' }}>
        <Button variant="onShadow" onClick={() => navigate('/reviews')}>
          {t('common.viewAll')}
        </Button>
      </Box>
    </Box>
  );
}


