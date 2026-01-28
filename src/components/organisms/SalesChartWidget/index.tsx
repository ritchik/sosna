import { useState } from 'react';
import Box from '@mui/material/Box';
import { Label } from '../../atoms/Label';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Card } from '../../molecules/Card';
import { FilterButtonGroup } from '../../molecules/FilterButtonGroup';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', current: 4000, previous: 2400 },
    { name: 'Tue', current: 3000, previous: 1398 },
    { name: 'Wed', current: 2000, previous: 9800 },
    { name: 'Thu', current: 2780, previous: 3908 },
    { name: 'Fri', current: 1890, previous: 4800 },
    { name: 'Sat', current: 2390, previous: 3800 },
    { name: 'Sun', current: 3490, previous: 4300 },
];

export const SalesChartWidget = () => {
    const [measure, setMeasure] = useState('Revenue');
    const [period, setPeriod] = useState('Today');
    const [chartType, setChartType] = useState('Bar');
    const [compare, setCompare] = useState(false);

    return (
        <Card title="Sales Chart">
            {/* Controls */}
            <Box sx={{ display: 'flex', gap: 3, marginBottom: 3, flexWrap: 'wrap' }}>
                {/* Measure */}
                <Box>
                    <Label>
                        MEASURE
                    </Label>
                    <FilterButtonGroup
                        options={['Revenue', 'Units sold']}
                        selected={measure}
                        onChange={setMeasure}
                    />
                </Box>

                {/* Period */}
                <Box>
                    <Label>
                        PERIOD
                    </Label>
                    <FilterButtonGroup
                        options={['Today', 'Current week']}
                        selected={period}
                        onChange={setPeriod}
                    />
                </Box>

                {/* Chart Type */}
                <Box>
                    <Label>
                        CHART TYPE
                    </Label>
                    <FilterButtonGroup
                        options={['Bar', 'Line']}
                        selected={chartType}
                        onChange={setChartType}
                    />
                </Box>
            </Box>

            {/* Compare Checkbox */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={compare}
                        onChange={(e) => setCompare(e.target.checked)}
                    />
                }
                label="Compare with Previous period"
                sx={{ marginBottom: 2 }}
            />

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" fill="#5B4EF5" />
                    {compare && <Bar dataKey="previous" fill="#00D4AA" />}
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};