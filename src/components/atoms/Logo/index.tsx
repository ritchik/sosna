import Box from '@mui/material/Box';
import { Text } from '../Text';

export function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Text variant="h6" weight="bold" color="primary">
        Marketplace
      </Text>
    </Box>
  );
}
