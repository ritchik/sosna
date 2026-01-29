import LinearProgress, { type LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Text } from '../Text';

interface ProgressBarProps extends LinearProgressProps {
  showLabel?: boolean;
}

export function ProgressBar({ value = 0, showLabel = false, ...props }: ProgressBarProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ flex: 1, height: 8, borderRadius: 4 }}
        {...props}
      />
      {showLabel && (
        <Text variant="body2" color="text.secondary">
          {Math.round(value)}%
        </Text>
      )}
    </Box>
  );
}
