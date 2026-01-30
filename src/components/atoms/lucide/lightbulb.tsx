import { Lightbulb } from 'lucide-react';

interface LightbulbIconProps {
    color?: string;
}

export function LightbulbIcon({ color = 'black' }: LightbulbIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lightbulb color={color} />
        </div>
    );
}
