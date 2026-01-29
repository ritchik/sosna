import Box from '@mui/material/Box';
import { Text } from '../../atoms/Text';
import { ProgressBar } from '../../atoms/ProgressBar';

interface ListItemProps {
  label: string;
  value: number;
}

export function ListItem({ label, value }: ListItemProps) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Text variant="body2">{label}</Text>
        <Text variant="body2" weight="bold">{value}%</Text>
      </Box>
      <ProgressBar value={value} />
    </Box>
  );
}
