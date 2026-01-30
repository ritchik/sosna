import { Check } from 'lucide-react';

interface CheckIconProps {
    color?: string;
}

export function CheckIcon({ color = 'black' }: CheckIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check color={color} />
        </div>
    );
}
