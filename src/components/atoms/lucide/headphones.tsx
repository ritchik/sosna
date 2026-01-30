import { Headphones } from 'lucide-react';

interface HeadphonesIconProps {
    color?: string;
}

export function HeadphonesIcon({ color = 'black' }: HeadphonesIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Headphones color={color} />
        </div>
    );
}
