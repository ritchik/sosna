import { Star } from 'lucide-react';

interface StarIconProps {
    color?: string;
}

export function StarIcon({ color = 'black' }: StarIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Star color={color} />
        </div>
    );
}
