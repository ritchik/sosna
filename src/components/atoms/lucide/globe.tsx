import { Globe } from 'lucide-react';

interface GlobeIconProps {
    color?: string;
}

export function GlobeIcon({ color = 'black' }: GlobeIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Globe color={color} />
        </div>
    );
}
