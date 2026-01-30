import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface CarouselDotsProps {
    total: number;
    active: number;
    onChange?: (index: number) => void;
}

export function CarouselDots({ total, active, onChange }: CarouselDotsProps) {
    const { mode } = useTheme();
    const palette = mode === 'light' ? lightPalette : darkPalette;

    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
            }}
        >
            {Array.from({ length: total }).map((_, index) => (
                <span
                    key={index}
                    onClick={() => onChange?.(index)}
                    style={{
                        width: index === active ? '36px' : '11px',
                        height: '11px',
                        borderRadius: '11px',
                        backgroundColor: index === active ? palette.primary.main : palette.shadow.main,
                        cursor: onChange ? 'pointer' : 'default',
                    }}
                />
            ))}
        </span>
    );
}