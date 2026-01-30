import { CircleUser } from 'lucide-react';

interface CircleUserIconProps {
    color?: string;
}

export function CircleUserIcon({ color = 'black' }: CircleUserIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircleUser color={color} />
        </div>
    );
}
