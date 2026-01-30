import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { Lightbulb } from 'lucide-react';
import { IconText } from '../../atoms/IconText';
import { Divider } from '../../atoms/Divider';
import { BannerButton } from '../../atoms/BannerButton';
import { CarouselDots } from '../../atoms/CaruselDots';
import { useTheme } from '../../../contexts/ThemeContext';
import { lightPalette, darkPalette } from '../../../contexts/colors';

export function SalesTipWidget() {
  const { t } = useTranslation();
  const { mode } = useTheme();
  const [activeTip, setActiveTip] = useState(0);

  const palette = mode === 'light' ? lightPalette : darkPalette;

  const tips = [
    { title: t('tips.tip1.title'), button: t('tips.tip1.button') },
    { title: t('tips.tip2.title'), button: t('tips.tip2.button') },
    { title: t('tips.tip3.title'), button: t('tips.tip3.button') },
  ];

  const currentTip = tips[activeTip];

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
          icon={<Lightbulb size={24} color="currentColor" />}
          text={t('tips.title')}
          variant="Label"
        />

        <Divider />

        <BannerButton
          title={currentTip.title}
          buttonText={currentTip.button}
          onClick={() => console.log('tip clicked')}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CarouselDots
            total={tips.length}
            active={activeTip}
            onChange={setActiveTip}
          />
        </Box>
      </Box>
    </Box>
  );
}