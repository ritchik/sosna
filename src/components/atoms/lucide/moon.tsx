import { Moon } from 'lucide-react';

interface MoonIconProps {
    color?: string;
}

export function MoonIcon({ color = 'black' }: MoonIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Moon color={color} />
        </div>
    );
}
