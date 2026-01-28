import Box from '@mui/material/Box';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';

import { ProgressBar } from '../../atoms/ProgressBar';

interface QualityBadgeProps {
    level: string;
    category: string;
    progress: number;
}

export const QualityBadge = ({ level, category, progress }: QualityBadgeProps) => {
    return (
        <Box sx={{
            background: 'linear-gradient(135deg, #5B4EF5 0%, #00D4AA 100%)',
            padding: 3,
            borderRadius: 2,
            color: 'white'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 1 }}>
                <Heading variant="h4">
                    🏆 {level}
                </Heading>
            </Box>
            <Text variant="body2" sx={{ marginBottom: 2 }}>
                {category}
            </Text>
            <ProgressBar value={progress} color="inherit" />
            <Text variant="caption" sx={{ marginTop: 1, display: 'block' }}>
                {progress}/100
            </Text>
        </Box>
    );
};