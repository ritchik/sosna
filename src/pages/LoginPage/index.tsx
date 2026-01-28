// src/pages/LoginPage/index.tsx
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AuthLayout } from '../../components/templates/AuthLayout';
import { Button } from '../../components/atoms/Button';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login:', email, password);
    };

    return (
        <AuthLayout title="Sign In">
            <Stack spacing={2}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
                <Button
                    customVariant="primary"
                    onClick={handleLogin}
                    fullWidth
                >
                    Sign In
                </Button>
            </Stack>
        </AuthLayout>
    );
};