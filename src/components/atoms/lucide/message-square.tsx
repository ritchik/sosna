import { MessageSquare } from 'lucide-react';

interface MessageSquareIconProps {
    color?: string;
}

export function MessageSquareIcon({ color = 'black' }: MessageSquareIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare color={color} />
        </div>
    );
}
