import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import { Card } from '../../molecules/Card';
import { FilterButtonGroup } from '../../molecules/FilterButtonGroup';
import { Text } from '../../atoms/Text';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getSalesChartData } from '../../../data/mockData';

type Period = 'today' | 'current_week' | 'previous_week';
type ChartType = 'bar' | 'line';

export function SalesChartWidget() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [period, setPeriod] = useState<Period>('current_week');
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [compare, setCompare] = useState(false);

  const periods = [
    { key: 'today' as Period, label: t('chart.today') },
    { key: 'current_week' as Period, label: t('chart.currentWeek') },
    { key: 'previous_week' as Period, label: t('chart.previousWeek') },
  ];

  const chartTypes = [
    { key: 'bar' as ChartType, label: t('chart.bar') },
    { key: 'line' as ChartType, label: t('chart.line') },
  ];

  const data = useMemo(
    () => getSalesChartData(period, i18n.language as 'pl' | 'en'),
    [period, i18n.language]
  );

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const incompleteColor = theme.palette.grey[400];

  return (
    <Card title={t('chart.title')}>
      <Box sx={{ display: 'flex', gap: 3, mb: 2, flexWrap: 'wrap' }}>
        <Box>
          <Text variant="caption" color="text.secondary">{t('chart.period')}</Text>
          <FilterButtonGroup
            options={periods.map((p) => p.label)}
            selected={periods.find((p) => p.key === period)?.label || ''}
            onChange={(label) => {
              const found = periods.find((p) => p.label === label);
              if (found) setPeriod(found.key);
            }}
          />
        </Box>
        <Box>
          <Text variant="caption" color="text.secondary">{t('chart.chartType')}</Text>
          <FilterButtonGroup
            options={chartTypes.map((c) => c.label)}
            selected={chartTypes.find((c) => c.key === chartType)?.label || ''}
            onChange={(label) => {
              const found = chartTypes.find((c) => c.label === label);
              if (found) setChartType(found.key);
            }}
          />
        </Box>
      </Box>

      <FormControlLabel
        control={<Checkbox checked={compare} onChange={(e) => setCompare(e.target.checked)} />}
        label={t('chart.comparePrevious')}
        sx={{ mb: 2 }}
      />

      <ResponsiveContainer width="100%" height={250}>
        {chartType === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="current" name={t('chart.current')}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.isIncomplete ? incompleteColor : primaryColor} />
              ))}
            </Bar>
            {compare && <Bar dataKey="previous" name={t('chart.previousPeriod')} fill={secondaryColor} />}
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="current" name={t('chart.current')} stroke={primaryColor} strokeWidth={2} />
            {compare && <Line type="monotone" dataKey="previous" name={t('chart.previousPeriod')} stroke={secondaryColor} strokeWidth={2} strokeDasharray="5 5" />}
          </LineChart>
        )}
      </ResponsiveContainer>
    </Card>
  );
}
