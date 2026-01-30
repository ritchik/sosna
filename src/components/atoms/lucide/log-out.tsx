import { LogOut } from 'lucide-react';

interface LogOutIconProps {
    color?: string;
}

export function LogOutIcon({ color = 'black' }: LogOutIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LogOut color={color} />
        </div>
    );
}
