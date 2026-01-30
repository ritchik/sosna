import Box from '@mui/material/Box';
import { type ChipProps } from '@mui/material/Chip';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette } from '../../../contexts/colors';

type BadgeColor = 'Unpaid' | 'NotShipped' | 'Returns';

interface BadgeProps extends Omit<ChipProps, 'size'> {
  count?: number;
  badgeColor?: BadgeColor;
}

const colorMap = {
  Unpaid: { bg: lightPalette.alert.main, text: '#fff' },
  NotShipped: { bg: lightPalette.alert.secondary, text: '#fff' },
  Returns: { bg: lightPalette.primary.main, text: '#fff' },
};

export function Badge({ count, label, badgeColor = 'Unpaid', sx }: BadgeProps) {
  const colors = colorMap[badgeColor];

  return (
    <Box
      component="span"
      sx={{
        ...textStyles.Filling,
        backgroundColor: colors.bg,
        color: colors.text,
        padding: '0 14px',
        borderRadius: '20px',
        height: '36px',
        display: 'inline-flex',
        alignItems: 'center',
        ...sx,
      }}
    >
      {count !== undefined ? count : label}
    </Box>
  );
}
