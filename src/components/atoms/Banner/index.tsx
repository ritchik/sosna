import Box from '@mui/material/Box';
import { IconText } from '../IconText';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette } from '../../../contexts/colors';

interface BannerProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sx?: object;
}

export function Banner({ icon, title, description, sx }: BannerProps) {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '22px',
        borderRadius: '10px',
        background: `linear-gradient(90deg, ${lightPalette.primary.main}, ${lightPalette.secondary.main})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...sx,
      }}
    >
      <IconText icon={icon} text={title } variant="Banner" color={lightPalette.text.secondary} />
      <span style={{ ...textStyles.Filling, marginTop: '13px', color: lightPalette.text.secondary }}>{description}</span>
    </Box>
  );
}