import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Text } from '../../atoms/Text';

interface CardProps {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, action, children, footer }: CardProps) {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.background.paper,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {title && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Text variant="h6" weight="bold">{title}</Text>
          {action}
        </Box>
      )}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
      {footer && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          {footer}
        </Box>
      )}
    </Paper>
  );
}
