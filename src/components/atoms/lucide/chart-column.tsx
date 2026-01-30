import { ChartColumn } from 'lucide-react';

interface ChartColumnIconProps {
    color?: string;
}

export function ChartColumnIcon({ color = 'black' }: ChartColumnIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChartColumn color={color} />
        </div>
    );
}
