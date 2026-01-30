import { Check } from 'lucide-react';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface CheckboxProps {
    checked?: boolean;
    onChange?: () => void;
}

export function Checkbox({ checked = false, onChange }: CheckboxProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <span
            onClick={onChange}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '10px',
                backgroundColor: checked ? palette.primary.main : 'transparent',
                border: checked ? 'none' : `2px solid ${palette.primary.main}`,
                boxSizing: 'border-box',
                cursor: onChange ? 'pointer' : 'default',
            }}
        >
            <Check size={20} color={checked ? '#fff' : 'transparent'} />
        </span>
    );
}