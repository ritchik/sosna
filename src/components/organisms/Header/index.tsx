import Box from '@mui/material/Box';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const Header = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
            backgroundColor: 'white',
            borderBottom: '1px solid #E0E0E0'
        }}>
            {/* Left */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Logo variant="small" />

                <Select
                    value="electronics"
                    size="small"
                    sx={{ minWidth: 200 }}
                >
                    <MenuItem value="electronics">Main Account - Electronics</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                </Select>
            </Box>

            {/* Right */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Button customVariant="toggle" size="small">
                    🌐 PL
                </Button>
                <Button customVariant="toggle" size="small">
                    🌙 Dark
                </Button>
                <Button customVariant="text" size="small" color="error">
                    Logout
                </Button>
            </Box>
        </Box>
    );
};