import { Switch as MuiSwitch, type SwitchProps as MuiSwitchProps, FormControlLabel } from '@mui/material';

interface SwitchProps extends MuiSwitchProps {
    label?: string;
}

export const Switch = ({ label, ...props }: SwitchProps) => {
    if (label) {
        return (
            <FormControlLabel
                control={<MuiSwitch {...props} />}
                label={label}
            />
        );
    }
    return <MuiSwitch {...props} />;
};
