import { LinearProgress, type LinearProgressProps, Box, Typography } from '@mui/material';

interface ProgressBarProps extends LinearProgressProps {
    showLabel?: boolean;
}

export const ProgressBar = ({ value, showLabel = false, ...props }: ProgressBarProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant={props.variant || 'determinate'} value={value} {...props} />
            </Box>
            {showLabel && (
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        value || 0,
                    )}%`}</Typography>
                </Box>
            )}
        </Box>
    );
};
