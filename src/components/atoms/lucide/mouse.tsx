import { Mouse } from 'lucide-react';

interface MouseIconProps {
    color?: string;
}

export function MouseIcon({ color = 'black' }: MouseIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Mouse color={color} />
        </div>
    );
}
