import { Award } from 'lucide-react';

interface AwardIconProps {
    color?: string;
}

export function AwardIcon({ color = 'black' }: AwardIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award color={color} />
        </div>
    );
}
