import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { useAuth } from '../../../contexts/AuthContext';
import { useTheme as useAppTheme } from '../../../contexts/ThemeContext';

export function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { accounts, currentAccount, switchAccount, logout } = useAuth();
  const { mode, toggleTheme } = useAppTheme();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 2,
      bgcolor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Logo />
        <Select
          value={currentAccount?.id || ''}
          onChange={(e) => switchAccount(e.target.value)}
          size="small"
          sx={{ minWidth: 180 }}
        >
          {accounts.map((acc) => (
            <MenuItem key={acc.id} value={acc.id}>{acc.name}</MenuItem>
          ))}
        </Select>
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="secondary"
          size="small"
          onClick={() => {
            const newLang = i18n.language === 'pl' ? 'en' : 'pl';
            i18n.changeLanguage(newLang);
            localStorage.setItem('language', newLang);
          }}
        >
          {i18n.language.toUpperCase()}
        </Button>
        <Button variant="secondary" size="small" onClick={toggleTheme}>
          {mode === 'dark' ? t('common.light') : t('common.dark')}
        </Button>
        <Button variant="text" size="small" color="error" onClick={handleLogout}>
          {t('common.logout')}
        </Button>
      </Box>
    </Box>
  );
}
