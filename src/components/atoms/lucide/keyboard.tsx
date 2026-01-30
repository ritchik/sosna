import { Keyboard } from 'lucide-react';

interface KeyboardIconProps {
    color?: string;
}

export function KeyboardIcon({ color = 'black' }: KeyboardIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Keyboard color={color} />
        </div>
    );
}
