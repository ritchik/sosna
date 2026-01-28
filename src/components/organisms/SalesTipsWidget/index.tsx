import { useState } from 'react';
import Box from '@mui/material/Box';
import { TipCard } from '../../molecules/TipCard';
import MobileStepper from '@mui/material/MobileStepper';

const tips = [
    {
        title: 'Sales Tips',
        description: 'Add more photos to your listings to increase conversion by an average of 23%',
        buttonText: 'Learn more'
    },
    {
        title: 'Marketing Tips',
        description: 'Use seasonal promotions to boost sales during holidays',
        buttonText: 'Learn more'
    },
    {
        title: 'Customer Service',
        description: 'Respond to customer inquiries within 24 hours for better ratings',
        buttonText: 'Learn more'
    },
];

export const SalesTipsWidget = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Box>
            <TipCard
                {...tips[activeStep]}
                onButtonClick={() => alert('Learn more clicked!')}
            />

            <MobileStepper
                variant="dots"
                steps={tips.length}
                position="static"
                activeStep={activeStep}
                sx={{
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    marginTop: 1
                }}
                nextButton={<span />}
                backButton={<span />}
            />
        </Box>
    );
};