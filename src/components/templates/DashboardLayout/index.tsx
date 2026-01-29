import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Header } from '../../organisms/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.default }}>
      <Header />
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
