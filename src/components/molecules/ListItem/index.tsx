import Box from '@mui/material/Box';
import { ProgressBar } from '../../atoms/ProgressBar';
import { Text } from '../../atoms/Text';

interface ListItemProps {
    label: string;
    value: number;
    maxValue?: number;
    showProgress?: boolean;
}

export const ListItem = ({ label, value, maxValue = 100, showProgress = true }: ListItemProps) => {
    return (
        <Box sx={{ marginBottom: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.5 }}>
                <Text variant="body2">• {label}</Text>
                <Text variant="body2" color="warning.main" weight="bold">
                    {value}/{maxValue}
                </Text>
            </Box>
            {showProgress && <ProgressBar value={(value / maxValue) * 100} color="warning" />}
        </Box>
    );
};