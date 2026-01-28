import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

interface IconProps extends Omit<LucideProps, 'color'> {
    name: IconName;
    color?: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
    const IconComponent = LucideIcons[name] as React.ElementType;

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <IconComponent {...props} />;
};