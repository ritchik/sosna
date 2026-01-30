import LinearProgress, { type LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Text } from '../Text';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface ProgressBarProps extends LinearProgressProps {
  showLabel?: boolean;
}

export function ProgressBar({ value = 0, showLabel = false, sx, ...props }: ProgressBarProps) {
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          flex: 1,
          height: 36,
          borderRadius: 20,
          backgroundColor: palette.background.default,
          '& .MuiLinearProgress-bar': {
            borderRadius: 20,
            background: `linear-gradient(90deg, ${palette.primary.main}, ${palette.secondary.main})`,
          },
          ...sx,
        }}
        {...props}
      />
      {showLabel && (
        <Text variant="body2" color="text.primary">
          {Math.round(value)}%
        </Text>
      )}
    </Box>
  );
}