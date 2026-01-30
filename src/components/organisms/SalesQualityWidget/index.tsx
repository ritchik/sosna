import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Medal } from 'lucide-react';
import { IconText } from '../../atoms/IconText';
import { Divider } from '../../atoms/Divider';
import { Banner } from '../../atoms/Banner';
import { ProgressBar } from '../../atoms/ProgressBar';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { useAuth } from '../../../contexts/AuthContext';
import { getSalesQuality } from '../../../data/mockData';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { textStyles } from '../../../contexts/TextStyles';
import { useTheme } from '../../../contexts/ThemeContext';

export function SalesQualityWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentAccount } = useAuth();
  const { mode } = useTheme();

  const palette = mode === 'light' ? lightPalette : darkPalette;

  const quality = getSalesQuality(currentAccount?.id || 'demo1');

  const worstAspects = quality
    ? [...quality.aspects].sort((a, b) => a.score - b.score).slice(0, 3)
    : [];

  if (!quality) {
    return (
      <Box
        sx={{
          backgroundColor: palette.widget.main,
          borderRadius: '10px',
          padding: '24px',
        }}
      >
        <Alert severity="info">{t('quality.noQuality')}</Alert>
        <Text color="text.secondary" sx={{ mt: 2 }}>{t('quality.noQualityMessage')}</Text>
      </Box>
    );
  }

  const percentage = Math.round((quality.totalScore / quality.maxScore) * 100);

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
          icon={<Medal size={24} color="currentColor" />} 
          text={t('quality.title')} 
          variant="Label" 
        />

        <Divider />

        <Banner
          icon={<Medal size={32} color="currentColor" />}
          title={quality.category}
          description={`${quality.totalScore} / ${quality.maxScore} (${percentage}%)`}
        />

        <span style={{ ...textStyles.Label, color: palette.text.primary }}>
          {t('quality.areasToImprove')}:
        </span>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {worstAspects.map((aspect) => (
            <Box key={aspect.id} sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ ...textStyles.Comment, color: palette.text.primary }}>
                {t(`quality.aspects.${aspect.name}`)}
              </span>
              <ProgressBar 
                value={Math.round((aspect.score / aspect.maxScore) * 100)} 
                showLabel 
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ marginTop: 'auto' }}>
        <Button variant="onShadow" onClick={() => navigate('/quality')}>
          {t('common.viewAll')}
        </Button>
      </Box>
    </Box>
  );
}