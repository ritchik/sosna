import { Select, MenuItem } from '@mui/material';
import { IconText } from '../../atoms/IconText';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { textStyles } from '../../../contexts/TextStyles';
import { useTheme } from '../../../contexts/ThemeContext';

interface DropdownProps {
    icon: React.ReactElement;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}

export function Dropdown({ icon, value, options, onChange }: DropdownProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;
    const selectedLabel = options.find((opt) => opt.value === value)?.label || '';

    return (
        <Select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            renderValue={() => (
                <IconText icon={icon} text={selectedLabel} variant="Filling" />
            )}
            sx={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                border: `1px solid ${palette.shadow.main}`,
                ...textStyles.Filling,
                '& .MuiSelect-select': {
                    padding: '10px 20px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
            }}
        >
            {options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                </MenuItem>
            ))}
        </Select>
    );
}