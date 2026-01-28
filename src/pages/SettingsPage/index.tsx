// src/pages/SettingsPage/index.tsx
import { Heading } from '../../components/atoms/Heading';
import { Text } from '../../components/atoms/Text';
import { FullWidthLayout } from '../../components/templates/FullWidthLayout';
import { Card } from '../../components/molecules/Card';

export const SettingsPage = () => {
    return (
        <FullWidthLayout>
            <Heading variant="h3" sx={{ marginBottom: 3 }}>
                Settings
            </Heading>

            <Card title="Account Settings">
                <Text>Account settings content here...</Text>
            </Card>
        </FullWidthLayout>
    );
};