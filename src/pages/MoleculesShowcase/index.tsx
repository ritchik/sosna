import { useState } from 'react';
import Box from '@mui/material/Box';
import { Heading } from '../../components/atoms/Heading';
import { Label } from '../../components/atoms/Label';
import Grid from '@mui/material/Grid';

import { Card } from '../../components/molecules/Card';
import { StatItem } from '../../components/molecules/StatItem';
import { ReviewItem } from '../../components/molecules/ReviewItem';
import { ProductRankingItem } from '../../components/molecules/ProductRankingItem';
import { FilterButtonGroup } from '../../components/molecules/FilterButtonGroup';
import { QualityBadge } from '../../components/molecules/QualityBadge';
import { ListItem } from '../../components/molecules/ListItem';
import { TipCard } from '../../components/molecules/TipCard';

export const MoleculesShowcase = () => {
    const [filter, setFilter] = useState('All');

    return (
        <Box sx={{ padding: 4, backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
            <Heading variant="h2" sx={{ marginBottom: 4 }}>
                Molecules
            </Heading>

            <Grid container spacing={3}>
                {/* StatItem */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card title="StatItem">
                        <StatItem icon="ShoppingCart" label="Orders" count={92} badgeColor="warning" />
                        <StatItem icon="LocalShipping" label="Not Shipped" count={11} badgeColor="error" />
                        <StatItem icon="Assignment" label="Returns" count={3} badgeColor="info" />
                    </Card>
                </Grid>

                {/* ReviewItem */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card title="Customer Reviews">
                        <FilterButtonGroup
                            options={['All', 'Positive', 'Negative']}
                            selected={filter}
                            onChange={setFilter}
                        />
                        <Box sx={{ marginTop: 2 }}>
                            <ReviewItem
                                rating={4.5}
                                author="Anna K."
                                date="2 days ago"
                                text="Very Good quality, slight delay in shipping"
                            />
                            <ReviewItem
                                rating={5}
                                author="John D."
                                date="3 days ago"
                                text="Very Good quality"
                            />
                        </Box>
                    </Card>
                </Grid>

                {/* ProductRankingItem */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card title="Product Ranking">
                        <ProductRankingItem
                            rank={1}
                            icon="Headphones"
                            name="Wireless Headphones"
                            quantity="234 pcs"
                            value="12 500 PLN"
                        />
                        <ProductRankingItem
                            rank={2}
                            icon="Keyboard"
                            name="Keyboard"
                            quantity="212 pcs"
                            value="12 500 PLN"
                        />
                        <ProductRankingItem
                            rank={3}
                            icon="Mouse"
                            name="Mouse"
                            quantity="323 pcs"
                            value="12 500 PLN"
                        />
                    </Card>
                </Grid>

                {/* QualityBadge */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card title="Sales Quality">
                        <QualityBadge
                            level="SILVER"
                            category="Quality Category"
                            progress={94}
                        />
                        <Box sx={{ marginTop: 3 }}>
                            <Label sx={{ marginBottom: 2 }}>
                                AREAS TO IMPROVE:
                            </Label>
                            <ListItem label="Shipping time" value={94} />
                            <ListItem label="Claims" value={98} />
                            <ListItem label="Communications" value={98} />
                        </Box>
                    </Card>
                </Grid>

                {/* TipCard */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <TipCard
                        title="Sales Tips"
                        description="Add more photos to your listings to increase conversion by an average of 23%"
                        buttonText="Learn more"
                        onButtonClick={() => alert('Learn more clicked!')}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};