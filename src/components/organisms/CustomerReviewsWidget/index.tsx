import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Card } from '../../molecules/Card';
import { FilterButtonGroup } from '../../molecules/FilterButtonGroup';
import { ReviewItem } from '../../molecules/ReviewItem';
import { Text } from '../../atoms/Text';
import { Rating } from '../../atoms/Rating';
import { Button } from '../../atoms/Button';
import { useAuth } from '../../../contexts/AuthContext';
import { reviewsData, getAverageRating } from '../../../data/mockData';

type Filter = 'all' | 'positive' | 'negative';

export function CustomerReviewsWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentAccount } = useAuth();
  const [filter, setFilter] = useState<Filter>('all');

  const reviews = reviewsData[currentAccount?.id || 'demo1'] || [];
  const avgRating = getAverageRating(reviews);

  const filters = [
    { key: 'all' as Filter, label: t('reviews.filter.all') },
    { key: 'positive' as Filter, label: t('reviews.filter.positive') },
    { key: 'negative' as Filter, label: t('reviews.filter.negative') },
  ];

  const filtered = reviews
    .filter((r) => filter === 'all' || r.type === filter)
    .slice(0, 3);

  if (reviews.length === 0) {
    return (
      <Card title={t('reviews.title')}>
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Alert severity="info">{t('reviews.noReviews')}</Alert>
          <Text color="text.secondary" sx={{ mt: 2 }}>{t('reviews.noReviewsMessage')}</Text>
        </Box>
      </Card>
    );
  }

  return (
    <Card
      title={t('reviews.title')}
      action={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Text weight="bold">{avgRating}</Text>
          <Rating value={avgRating} size="small" />
        </Box>
      }
      footer={<Button variant="text" size="small" onClick={() => navigate('/reviews')} sx={{ minWidth: 0, p: 0, textTransform: 'none', fontWeight: 400 }}>{t('common.viewAll')}</Button>}
    >
      <FilterButtonGroup
        options={filters.map((f) => f.label)}
        selected={filters.find((f) => f.key === filter)?.label || ''}
        onChange={(label) => {
          const found = filters.find((f) => f.label === label);
          if (found) setFilter(found.key);
        }}
      />

      <Box sx={{ mt: 2 }}>
        {filtered.length > 0 ? (
          filtered.map((review) => (
            <ReviewItem key={review.id} {...review} />
          ))
        ) : (
          <Text color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
            {t('common.noData')}
          </Text>
        )}
      </Box>
    </Card>
  );
}
