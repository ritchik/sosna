import Box from '@mui/material/Box';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';

interface TipCardProps {
    icon?: string;
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
}

export const TipCard = ({ icon = 'Lightbulb', title, description, buttonText, onButtonClick }: TipCardProps) => {
    return (
        <Box sx={{
            padding: 3,
            backgroundColor: '#E0F7F4',
            borderRadius: 2,
            textAlign: 'center'
        }}>
            {icon && (
                <Box sx={{ marginBottom: 2 }}>
                    <Icon name={icon as any} size={40} color="#0288d1" />
                </Box>
            )}
            <Heading variant="h6" sx={{ marginBottom: 1 }}>
                {title}
            </Heading>
            <Text variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                {description}
            </Text>
            <Button customVariant="primary" size="small" onClick={onButtonClick}>
                {buttonText}
            </Button>
        </Box>
    );
};