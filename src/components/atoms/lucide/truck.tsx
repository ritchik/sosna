import { Truck } from 'lucide-react';

interface TruckIconProps {
    color?: string;
}

export function TruckIcon({ color = 'black' }: TruckIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Truck color={color} />
        </div>
    );
}
