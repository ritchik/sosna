import { useState } from 'react';
import Box from '@mui/material/Box';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import Grid from '@mui/material/Grid';
import { Button } from '../../components/atoms/Button';
import Stack from '@mui/material/Stack';

// Import templates
import { DashboardLayout } from '../../components/templates/DashboardLayout';
import { AuthLayout } from '../../components/templates/AuthLayout';
import { FullWidthLayout } from '../../components/templates/FullWidthLayout';

// Import widgets
import { OrdersWidget } from '../../components/organisms/OrdersWidget';
import { CustomerReviewsWidget } from '../../components/organisms/CustomerReviewsWidget';
import { Card } from '../../components/molecules/Card';

export const TemplatesShowcase = () => {
    const [template, setTemplate] = useState<'dashboard' | 'auth' | 'fullwidth'>('dashboard');

    // Dashboard Template Content
    const DashboardContent = (
        <DashboardLayout>
            <Heading variant="h3" sx={{ marginBottom: 3 }}>
                Dashboard Template
            </Heading>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <OrdersWidget />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CustomerReviewsWidget />
                </Grid>
            </Grid>
        </DashboardLayout>
    );

    // Auth Template Content
    const AuthContent = (
        <AuthLayout title="Login to Your Account">
            <Stack spacing={2}>
                <input
                    type="email"
                    placeholder="Email"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <Button customVariant="primary" fullWidth>
                    Sign In
                </Button>
            </Stack>
        </AuthLayout>
    );

    // Full Width Template Content
    const FullWidthContent = (
        <FullWidthLayout>
            <Heading variant="h3" sx={{ marginBottom: 3 }}>
                Full Width Template
            </Heading>
            <Card title="Settings">
                <Text>
                    This is a full-width layout without sidebar.
                    Perfect for settings, profile pages, or full-width content.
                </Text>
            </Card>
        </FullWidthLayout>
    );

    return (
        <Box>
            {/* Template Selector (floating) */}
            <Box sx={{
                position: 'fixed',
                top: 20,
                right: 20,
                zIndex: 9999,
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                boxShadow: 3
            }}>
                <Heading variant="h6" sx={{ marginBottom: 1 }}>
                    Select Template:
                </Heading>
                <Stack spacing={1}>
                    <Button
                        customVariant={template === 'dashboard' ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setTemplate('dashboard')}
                    >
                        Dashboard
                    </Button>
                    <Button
                        customVariant={template === 'auth' ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setTemplate('auth')}
                    >
                        Auth
                    </Button>
                    <Button
                        customVariant={template === 'fullwidth' ? 'primary' : 'secondary'}
                        size="small"
                        onClick={() => setTemplate('fullwidth')}
                    >
                        Full Width
                    </Button>
                </Stack>
            </Box>

            {/* Render Selected Template */}
            {template === 'dashboard' && DashboardContent}
            {template === 'auth' && AuthContent}
            {template === 'fullwidth' && FullWidthContent}
        </Box>
    );
};