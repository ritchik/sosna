import { Circle } from 'lucide-react';

interface Icon1Props {
    color?: string;
}

export function Icon1({ color = 'black' }: Icon1Props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Circle color={color} />
        </div>
    );
}
