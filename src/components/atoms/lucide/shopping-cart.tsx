import { ShoppingCart } from 'lucide-react';

interface ShoppingCartIconProps {
    color?: string;
}

export function ShoppingCartIcon({ color = 'black' }: ShoppingCartIconProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShoppingCart color={color} />
        </div>
    );
}
