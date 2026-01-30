import { Sun } from 'lucide-react';

interface SunIconProps {
    color?: string;
}

export function SunIcon({ color = 'black' }: SunIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sun color={color} />
        </div>
    );
}
