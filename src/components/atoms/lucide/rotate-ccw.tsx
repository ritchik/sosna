import { RotateCcw } from 'lucide-react';

interface RotateCcwIconProps {
    color?: string;
}

export function RotateCcwIcon({ color = 'black' }: RotateCcwIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RotateCcw color={color} />
        </div>
    );
}
