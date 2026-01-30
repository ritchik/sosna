import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Text } from '../../atoms/Text';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img src="/Logo.svg" alt="Logo" style={{ height: 48 }} />
        </Box>

        {title && (
          <Text variant="h5" weight="medium" sx={{ mb: 3 }}>
            {title}
          </Text>
        )}

        {children}
      </Paper>
    </Box>
  );
}

