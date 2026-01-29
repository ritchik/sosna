import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { AuthLayout } from '../../components/templates/AuthLayout';
import { Button } from '../../components/atoms/Button';
import { Text } from '../../components/atoms/Text';
import { useAuth } from '../../contexts/AuthContext';

export function LoginPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const success = login(userId);
    if (success) {
      navigate('/dashboard');
    } else {
      setError(t('auth.invalidCredentials'));
    }
  };

  return (
    <AuthLayout title={t('auth.title')}>
      <Stack spacing={3}>
        <Text color="text.secondary" sx={{ textAlign: 'center' }}>
          {t('auth.subtitle')}
        </Text>

        {error && <Alert severity="error" onClose={() => setError('')}>{error}</Alert>}

        <TextField
          label={t('auth.userIdLabel')}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          fullWidth
          helperText="IDs: seller1, seller2, demo"
        />

        <Button variant="primary" onClick={handleLogin} fullWidth size="large">
          {t('auth.signIn')}
        </Button>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="text"
            size="small"
            onClick={() => {
              const newLang = i18n.language === 'pl' ? 'en' : 'pl';
              i18n.changeLanguage(newLang);
              localStorage.setItem('language', newLang);
            }}
          >
            {i18n.language === 'pl' ? 'English' : 'Polski'}
          </Button>
        </Box>
      </Stack>
    </AuthLayout>
  );
}
