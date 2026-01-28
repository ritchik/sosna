import { Avatar as MuiAvatar, type AvatarProps as MuiAvatarProps } from '@mui/material';

interface AvatarProps extends MuiAvatarProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({ size = 'medium', sx, ...props }: AvatarProps) => {
    let width = 40;
    let height = 40;

    if (size === 'small') {
        width = 24;
        height = 24;
    } else if (size === 'large') {
        width = 56;
        height = 56;
    }

    return (
        <MuiAvatar
            sx={{ width, height, ...sx }}
            {...props}
        />
    );
};
