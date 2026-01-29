import Box from '@mui/material/Box';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';

interface StatItemProps {
  label: string;
  count: number;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export function StatItem({ label, count, color = 'primary' }: StatItemProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
      <Text>{label}</Text>
      <Badge count={count} color={color} />
    </Box>
  );
}
