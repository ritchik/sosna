import { Package } from 'lucide-react';

interface PackageIconProps {
    color?: string;
}

export function PackageIcon({ color = 'black' }: PackageIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Package color={color} />
        </div>
    );
}
