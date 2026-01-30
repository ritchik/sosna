import { Checkbox } from '../CheckBox';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface CheckboxTextProps {
    checked?: boolean;
    onChange?: () => void;
    text: string;
}

export function CheckboxText({ checked = false, onChange, text }: CheckboxTextProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <span
            onClick={onChange}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                cursor: 'pointer',
            }}
        >
            <Checkbox checked={checked} />
            <span style={{ ...textStyles.Filling, color: palette.text.primary }}>{text}</span>
        </span>
    );
}