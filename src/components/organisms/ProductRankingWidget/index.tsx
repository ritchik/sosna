import { useState } from 'react';
import Box from '@mui/material/Box';
import { Card } from '../../molecules/Card';
import { FilterButtonGroup } from '../../molecules/FilterButtonGroup';
import { ProductRankingItem } from '../../molecules/ProductRankingItem';

const products = [
    { rank: 1, icon: 'Headphones', name: 'Wireless Headphones', quantity: '234 pcs', value: '12 500 PLN' },
    { rank: 2, icon: 'Keyboard', name: 'Keyboard', quantity: '212 pcs', value: '12 500 PLN' },
    { rank: 3, icon: 'Mouse', name: 'Mouse', quantity: '323 pcs', value: '12 500 PLN' },
];

export const ProductRankingWidget = () => {
    const [view, setView] = useState('Most purchased');

    return (
        <Card title="Product Ranking">
            {/* Tabs */}
            <Box sx={{ marginBottom: 2 }}>
                <FilterButtonGroup
                    options={['Most purchased', 'Least purchased']}
                    selected={view}
                    onChange={setView}
                />
            </Box>

            {/* Products List */}
            <Box>
                {products.map((product) => (
                    <ProductRankingItem key={product.rank} {...product} />
                ))}
            </Box>
        </Card>
    );
};