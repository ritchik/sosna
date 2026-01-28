import { useState } from 'react';
import Box from '@mui/material/Box';
import { Heading } from '../../atoms/Heading';
import { Card } from '../../molecules/Card';
import { FilterButtonGroup } from '../../molecules/FilterButtonGroup';
import { ReviewItem } from '../../molecules/ReviewItem';
import { Rating } from '../../atoms/Rating';

const reviews = [
    { rating: 4, author: 'Anna K.', date: '2 days ago', text: 'Very Good quality, slight delay in shipping' },
    { rating: 5, author: 'John D.', date: '2 days ago', text: 'Very Good quality' },
    { rating: 5, author: 'Maria S.', date: '3 days ago', text: 'Very Good quality' },
];

export const CustomerReviewsWidget = () => {
    const [filter, setFilter] = useState('All');

    return (
        <Card>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Heading variant="h6">
                    Customer Reviews
                </Heading>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Heading variant="h6">
                        4.4
                    </Heading>
                    <Rating value={4.4} size="small" />
                </Box>
            </Box>

            {/* Filters */}
            <FilterButtonGroup
                options={['All', 'Positive', 'Negative']}
                selected={filter}
                onChange={setFilter}
            />

            {/* Reviews List */}
            <Box sx={{ marginTop: 2 }}>
                {reviews.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                ))}
            </Box>
        </Card>
    );
};