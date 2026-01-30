import { CircleDollarSign } from 'lucide-react';

interface CircleDollarSignIconProps {
    color?: string;
}

export function CircleDollarSignIcon({ color = 'black' }: CircleDollarSignIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircleDollarSign color={color} />
        </div>
    );
}
