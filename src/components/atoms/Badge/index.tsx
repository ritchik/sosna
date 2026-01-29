import Chip, { type ChipProps } from '@mui/material/Chip';

interface BadgeProps extends Omit<ChipProps, 'size'> {
  count?: number;
}

export function Badge({ count, label, ...props }: BadgeProps) {
  return (
    <Chip
      size="small"
      label={count !== undefined ? count : label}
      {...props}
    />
  );
}
