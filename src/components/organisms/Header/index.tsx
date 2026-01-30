import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Dropdown } from '../../molecules/DropDown';
import { useAuth } from '../../../contexts/AuthContext';
import { useTheme as useAppTheme } from '../../../contexts/ThemeContext';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { IconButton } from '../../atoms/IconButtton';
import { MoonIcon } from '../../atoms/lucide/moon';
import { SunIcon } from '../../atoms/lucide/sun';
import { GlobeIcon } from '../../atoms/lucide/globe';
import { LogOutIcon } from '../../atoms/lucide/log-out';
import { CircleUser } from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { accounts, currentAccount, switchAccount, logout } = useAuth();
  const { mode, toggleTheme } = useAppTheme();

  const palette = mode === 'light' ? lightPalette : darkPalette;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: { xs: '16px', md: '16px 48px', lg: '16px 120px' },
      gap: '16px',
      bgcolor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src="/Logo.svg" alt="Logo" />
      </Box>

      <Box sx={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center', minWidth: '200px' }}>
        <Dropdown
          icon={<CircleUser size={20} color="currentColor" />}
          value={currentAccount?.id || ''}
          options={accounts.map((acc) => ({ value: acc.id, label: acc.name }))}
          onChange={switchAccount}
        />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <IconButton
          icon={<GlobeIcon color="currentColor" />}
          text={i18n.language.toUpperCase()}
          onClick={() => {
            const newLang = i18n.language === 'pl' ? 'en' : 'pl';
            i18n.changeLanguage(newLang);
            localStorage.setItem('language', newLang);
          }}
        />
        <IconButton
          icon={mode === 'dark' ? <SunIcon color="currentColor" /> : <MoonIcon color="currentColor" />}
          text={mode === 'dark' ? t('common.light') : t('common.dark')}
          onClick={toggleTheme}
        />
        <IconButton
          icon={<LogOutIcon color="currentColor" />}
          text={t('common.logout')}
          borderColor={palette.alert.secondary}
          textColor={palette.alert.secondary}
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
}