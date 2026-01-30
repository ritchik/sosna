import Box from '@mui/material/Box';
import { Button } from '../Button';
import { textStyles } from '../../../contexts/TextStyles';
import { useTheme } from '../../../contexts/ThemeContext';
import { lightPalette, darkPalette } from '../../../contexts/colors';

interface FilterBlockProps {
  title: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export function FilterBlock({ title, options, selected, onChange }: FilterBlockProps) {
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span style={{ ...textStyles.Filling, color: palette.text.primary, textTransform: 'uppercase' }}>
        {title}
      </span>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        {options.map((opt) => (
          <Button
            key={opt}
            variant={selected === opt ? 'primary' : 'secondary'}
            onClick={() => onChange(opt)}
            sx={{ flex: 1 }}
          >
            {opt}
          </Button>
        ))}
      </Box>
    </Box>
  );
}