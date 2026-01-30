import { Trophy } from 'lucide-react';

interface TrophyIconProps {
    color?: string;
}

export function TrophyIcon({ color = 'black' }: TrophyIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Trophy color={color} />
        </div>
    );
}
