import { AlertCircle } from 'lucide-react';

interface AlertIconProps {
  color?: string;
}

export function AlertIcon({ color = 'black' }: AlertIconProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AlertCircle color={color} />
    </div>
  );
}
