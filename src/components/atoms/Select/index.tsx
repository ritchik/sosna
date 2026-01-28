import { Select as MuiSelect, type SelectProps as MuiSelectProps, MenuItem, FormControl, InputLabel } from '@mui/material';

export interface SelectOption {
    label: string;
    value: string | number;
}

type SelectProps = MuiSelectProps & {
    options: SelectOption[];
    label?: string;
};

export const Select = ({ options, label, fullWidth = true, ...props }: SelectProps) => {
    return (
        <FormControl fullWidth={fullWidth} size={props.size}>
            {label && <InputLabel>{label}</InputLabel>}
            <MuiSelect
                label={label}
                {...props}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};
