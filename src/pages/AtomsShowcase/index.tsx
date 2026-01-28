import { Button } from '../../components/atoms/Button';
import { Badge } from '../../components/atoms/Badge';
import { Rating } from '../../components/atoms/Rating';
import { Quality } from '../../components/atoms/Quality';
import { Icon } from '../../components/atoms/Icon';
import { Select } from '../../components/atoms/Select';
import { Avatar } from '../../components/atoms/Avatar';
import { Divider } from '../../components/atoms/Divider';
import { Input } from '../../components/atoms/Input';
import { ProgressBar } from '../../components/atoms/ProgressBar';
import { Switch } from '../../components/atoms/Switch';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';

export const AtomsShowcase = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Heading variant="h2" sx={{ marginBottom: 4 }}>
                Atomy - Dashboard Buttons
            </Heading>

            <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2, marginBottom: 3 }}>
                <Heading variant="h4" sx={{ marginBottom: 3 }}>
                    🔘 Button Variants
                </Heading>

                {/* PRIMARY - Główne akcje */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Primary (główne akcje)
                    </Heading>
                    <Stack direction="row" spacing={2}>
                        <Button customVariant="primary">All</Button>
                        <Button customVariant="primary">Most purchased</Button>
                        <Button customVariant="primary">Learn more</Button>
                    </Stack>
                </Box>

                {/* SECONDARY - Drugorzędne */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Secondary (filtry, akcje drugorzędne)
                    </Heading>
                    <Stack direction="row" spacing={2}>
                        <Button customVariant="secondary">Positive</Button>
                        <Button customVariant="secondary">Negative</Button>
                        <Button customVariant="secondary">View all</Button>
                        <Button customVariant="secondary">View details</Button>
                    </Stack>
                </Box>

                {/* TOGGLE - Przełączniki */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Toggle (język, dark mode)
                    </Heading>
                    <Stack direction="row" spacing={2}>
                        <Button customVariant="toggle" size="small">PL</Button>
                        <Button customVariant="toggle" size="small">EN</Button>
                        <Button customVariant="toggle" size="small">🌙 Dark</Button>
                        <Button customVariant="toggle" size="small">☀️ Light</Button>
                    </Stack>
                </Box>

                {/* TEXT - Linki */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Text (linki, akcje minimalne)
                    </Heading>
                    <Stack direction="row" spacing={2}>
                        <Button customVariant="text">Logout</Button>
                        <Button customVariant="text">Learn more</Button>
                    </Stack>
                </Box>

                {/* OUTLINED */}
                <Box>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Outlined
                    </Heading>
                    <Stack direction="row" spacing={2}>
                        <Button customVariant="outlined">Least purchased</Button>
                        <Button customVariant="outlined">Cancel</Button>
                    </Stack>
                </Box>
            </Box>

            {/* PRZYKŁADY Z DASHBOARDU */}
            <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}>
                <Heading variant="h4" sx={{ marginBottom: 3 }}>
                    📊 Dashboard Examples
                </Heading>

                {/* Filter buttons group */}
                <Box sx={{ marginBottom: 4 }}>
                    <Text variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 500 }}>
                        Customer Reviews Filters
                    </Text>
                    <Stack direction="row" spacing={1}>
                        <Button customVariant="primary" size="small">All</Button>
                        <Button customVariant="secondary" size="small">Positive</Button>
                        <Button customVariant="secondary" size="small">Negative</Button>
                    </Stack>
                </Box>

                {/* Product Ranking tabs */}
                <Box sx={{ marginBottom: 4 }}>
                    <Text variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 500 }}>
                        Product Ranking Tabs
                    </Text>
                    <Stack direction="row" spacing={1}>
                        <Button customVariant="primary">Most purchased</Button>
                        <Button customVariant="outlined">Least purchased</Button>
                    </Stack>
                </Box>

                {/* Chart controls */}
                <Box sx={{ marginBottom: 4 }}>
                    <Text variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 500 }}>
                        Chart Controls
                    </Text>
                    <Stack direction="row" spacing={1}>
                        <Button customVariant="primary" size="small">Revenue</Button>
                        <Button customVariant="secondary" size="small">Units sold</Button>
                        <Button customVariant="primary" size="small">Today</Button>
                        <Button customVariant="secondary" size="small">Current week</Button>
                        <Button customVariant="primary" size="small">Bar</Button>
                        <Button customVariant="secondary" size="small">Line</Button>
                    </Stack>
                </Box>

                {/* Header actions */}
                <Box>
                    <Text variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 500 }}>
                        Header Actions
                    </Text>
                    <Stack direction="row" spacing={2}>
                        <Button customVariant="toggle" size="small">🌐 PL</Button>
                        <Button customVariant="toggle" size="small">🌙 Dark</Button>
                        <Button customVariant="text" size="small" color="error">Logout</Button>
                    </Stack>
                </Box>
            </Box>

            {/* OTHER ATOMS */}
            <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2, marginTop: 3 }}>
                <Heading variant="h4" sx={{ marginBottom: 3 }}>
                    🧩 Other Atoms
                </Heading>

                {/* Rating */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Rating
                    </Heading>
                    <Stack direction="row" spacing={4}>
                        <Rating value={5} readOnly />
                        <Rating value={4} readOnly />
                        <Rating value={2.5} precision={0.5} readOnly />
                    </Stack>
                </Box>

                {/* Quality / Chips */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Quality (Chips)
                    </Heading>
                    <Stack direction="row" spacing={2}>
                        <Quality label="New" color="primary" />
                        <Quality label="Sale" color="error" />
                        <Quality label="Out of stock" />
                    </Stack>
                </Box>

                {/* Select */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Select
                    </Heading>
                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                        <Box sx={{ width: 200 }}>
                            <Select
                                label="Simple Select"
                                options={[
                                    { label: 'Option A', value: 'a' },
                                    { label: 'Option B', value: 'b' },
                                ]}
                                defaultValue=""
                            />
                        </Box>
                        <Box sx={{ width: 200 }}>
                            <Select
                                label="With Default"
                                options={[
                                    { label: 'First', value: 1 },
                                    { label: 'Second', value: 2 },
                                ]}
                                defaultValue={1}
                            />
                        </Box>
                    </Stack>
                </Box>

                {/* Icons */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Icons (Dynamic - Lucide)
                    </Heading>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Icon name="Home" size={32} color="#1976d2" />
                        <Icon name="Settings" size={32} color="#666" />
                        <Icon name="Heart" size={32} color="#d32f2f" />
                        <Icon name="ShoppingCart" size={32} />
                    </Stack>
                </Box>

                {/* Badges */}
                <Box>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Badges
                    </Heading>
                    <Stack direction="row" spacing={4} alignItems="center">
                        <Badge badgeContent={4} color="primary">
                            <Icon name="Mail" color="#666" />
                        </Badge>
                        <Badge badgeContent={10} color="error">
                            <Icon name="ShoppingCart" color="#666" />
                        </Badge>
                        <Badge variant="dot" color="primary">
                            <Icon name="Bell" color="#666" />
                        </Badge>
                    </Stack>
                </Box>

                {/* Input */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Input
                    </Heading>
                    <Stack direction="row" spacing={2} sx={{ maxWidth: 600 }}>
                        <Input label="Standard Input" />
                        <Input label="Password" type="password" />
                        <Input label="Number" type="number" />
                    </Stack>
                </Box>

                {/* Switch */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Switch
                    </Heading>
                    <Stack direction="row" spacing={4}>
                        <Switch defaultChecked />
                        <Switch label="With Label" />
                        <Switch label="Disabled" disabled />
                    </Stack>
                </Box>

                {/* Avatar */}
                <Box sx={{ marginBottom: 4 }}>
                    <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                        Avatar
                    </Heading>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar size="small" />
                        <Avatar />
                        <Avatar size="large" />
                        <Avatar alt="User Name" src="https://i.pravatar.cc/150?u=1" />
                    </Stack>
                </Box>

                <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                    ProgressBar
                </Heading>
                <Stack spacing={2} sx={{ maxWidth: 600 }}>
                    <ProgressBar value={50} />
                    <ProgressBar value={75} showLabel />
                    <ProgressBar value={30} color="secondary" />
                    <ProgressBar value={90} color="error" />
                </Stack>
            </Box>

            {/* Divider */}
            <Box sx={{ marginBottom: 4 }}>
                <Heading variant="h6" sx={{ marginBottom: 2, color: '#666' }}>
                    Divider
                </Heading>
                <Box sx={{ p: 2, border: '1px solid #eee' }}>
                    <Text>Content Above</Text>
                    <Divider sx={{ my: 2 }} />
                    <Text>Content Below</Text>
                </Box>
            </Box>
        </Box>

    );
};