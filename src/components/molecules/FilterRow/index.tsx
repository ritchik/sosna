import Box from '@mui/material/Box';
import { FilterBlock } from '../../atoms/FilterBlock';
import { CheckboxText } from '../../atoms/CheckBoxText';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface FilterRowProps {
    filters: {
        title: string;
        options: string[];
        selected: string;
        onChange: (value: string) => void;
    }[];
    checkbox?: {
        checked: boolean;
        onChange: () => void;
        label: string;
    };
}

export function FilterRow({ filters, checkbox }: FilterRowProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                padding: '16px',
                borderRadius: '10px',
                backgroundColor: palette.background.default,
                gap: '16px',
            }}
        >
            {filters.map((filter) => (
                <Box key={filter.title} sx={{ flex: '1 1 150px', minWidth: '150px' }}>
                    <FilterBlock
                        title={filter.title}
                        options={filter.options}
                        selected={filter.selected}
                        onChange={filter.onChange}
                    />
                </Box>
            ))}

            {checkbox && (
                <Box sx={{ flex: '1 1 200px', display: 'flex', justifyContent: 'flex-end', minWidth: '200px' }}>
                    <CheckboxText
                        checked={checkbox.checked}
                        onChange={checkbox.onChange}
                        text={checkbox.label}
                    />
                </Box>
            )}
        </Box>
    );
}