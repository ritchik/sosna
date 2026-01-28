import Box from '@mui/material/Box';
import { Label } from '../../atoms/Label';
import { Card } from '../../molecules/Card';
import { QualityBadge } from '../../molecules/QualityBadge';
import { ListItem } from '../../molecules/ListItem';
import { Button } from '../../atoms/Button';

export const SalesQualityWidget = () => {
    return (
        <Card title="Sales Quality">
            {/* Quality Badge */}
            <QualityBadge
                level="SILVER"
                category="Quality Category"
                progress={94}
            />

            {/* Areas to Improve */}
            <Box sx={{ marginTop: 3 }}>
                <Label sx={{ marginBottom: 2 }}>
                    AREAS TO IMPROVE:
                </Label>
                <ListItem label="Shipping time" value={94} />
                <ListItem label="Claims" value={98} />
                <ListItem label="Communications" value={98} />
            </Box>

            {/* View Details */}
            <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                <Button customVariant="text" size="small">
                    View details
                </Button>
            </Box>
        </Card>
    );
};