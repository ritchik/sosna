import Stack from '@mui/material/Stack';
import { Button } from '../../atoms/Button';

interface FilterButtonGroupProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export function FilterButtonGroup({ options, selected, onChange }: FilterButtonGroupProps) {
  return (
    <Stack direction="row" spacing={1}>
      {options.map((option) => (
        <Button
          key={option}
          variant={selected === option ? 'primary' : 'secondary'}
          size="small"
          onClick={() => onChange(option)}
        >
          {option}
        </Button>
      ))}
    </Stack>
  );
}
