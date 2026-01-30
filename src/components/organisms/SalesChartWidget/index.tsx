import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { BarChart2 } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { IconText } from '../../atoms/IconText';
import { Divider } from '../../atoms/Divider';
import { FilterRow } from '../../molecules/FilterRow';
import { useTheme } from '../../../contexts/ThemeContext';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { getSalesChartData } from '../../../data/mockData';

export function SalesChartWidget() {
  const { t, i18n } = useTranslation();
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;

  const [period, setPeriod] = useState('Today');
  const [chartType, setChartType] = useState('Bar');
  const [compare, setCompare] = useState(false);

  const periodMap: Record<string, 'today' | 'current_week'> = {
    'Today': 'today',
    'Current week': 'current_week',
  };

  const data = useMemo(
    () => getSalesChartData(periodMap[period] || 'today', i18n.language as 'pl' | 'en'),
    [period, i18n.language]
  );

  return (
    <Box
      sx={{
        maxWidth: '1880px',
        width: '100%',
        margin: '0 auto',
        backgroundColor: palette.widget.main,
        borderRadius: '10px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <IconText
        icon={<BarChart2 size={24} color="currentColor" />}
        text={t('chart.title')}
        variant="Label"
      />

      <Divider />

      <FilterRow
        filters={[
          { title: 'PERIOD', options: ['Today', 'Current week'], selected: period, onChange: setPeriod },
          { title: 'CHART TYPE', options: ['Bar', 'Line'], selected: chartType, onChange: setChartType },
        ]}
        checkbox={{
          checked: compare,
          onChange: () => setCompare(!compare),
          label: 'Compare with Previous period',
        }}
      />

      <ResponsiveContainer width="100%" height={300}>
        {chartType === 'Bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="current" name="Current">
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.isIncomplete ? palette.shadow.main : palette.primary.main} />
              ))}
            </Bar>
            {compare && <Bar dataKey="previous" name="Previous" fill={palette.secondary.main} />}
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="current" name="Current" stroke={palette.primary.main} strokeWidth={2} />
            {compare && <Line type="monotone" dataKey="previous" name="Previous" stroke={palette.secondary.main} strokeWidth={2} strokeDasharray="5 5" />}
          </LineChart>
        )}
      </ResponsiveContainer>
    </Box>
  );
}