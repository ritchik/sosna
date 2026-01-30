import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import {
    Trophy,
    ShoppingCart,
    CircleDollarSign,
    Headphones,
    Keyboard,
    Mouse,
    Monitor,
    Shirt,
    Footprints,
    Lightbulb,
    Armchair,
    Square,
    BookOpen,
    Library,
    Book,
    Newspaper,
    Blocks,
    Smile,
    Puzzle,
    Dices,
    Package
} from 'lucide-react';
import { IconText } from '../../atoms/IconText';
import { Divider } from '../../atoms/Divider';
import { Button } from '../../atoms/Button';
import { StatRow } from '../../molecules/StatRow';
import { useAuth } from '../../../contexts/AuthContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { getProductRanking } from '../../../data/mockData';
import { lightPalette, darkPalette } from '../../../contexts/colors';

type SortBy = 'mostPurchased' | 'leastPurchased';

const iconMap: Record<string, React.ElementType> = {
    headphones: Headphones,
    keyboard: Keyboard,
    mouse: Mouse,
    monitor: Monitor,
    shirt: Shirt,
    footprints: Footprints,
    lightbulb: Lightbulb,
    armchair: Armchair,
    square: Square,
    'book-open': BookOpen,
    library: Library,
    book: Book,
    newspaper: Newspaper,
    blocks: Blocks,
    smile: Smile,
    puzzle: Puzzle,
    dices: Dices,
    package: Package,
};

function getProductIcon(iconType: string) {
    const IconComponent = iconMap[iconType] || Package;
    return <IconComponent size={24} color="#fff" />;
}

export function ProductRankingWidget() {
    const { t } = useTranslation();
    const { currentAccount } = useAuth();
    const { mode } = useTheme();
    const [sortBy, setSortBy] = useState<SortBy>('mostPurchased');

    const palette = mode === 'light' ? lightPalette : darkPalette;
    const products = getProductRanking(currentAccount?.id || 'demo1', sortBy);

    return (
        <Box
            sx={{
                backgroundColor: palette.widget.main,
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                height: '100%',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <IconText
                    icon={<Trophy size={24} color="currentColor" />}
                    text={t('ranking.title')}
                    variant="Label"
                />

                <Divider />

                <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Button
                        variant={sortBy === 'mostPurchased' ? 'primary' : 'secondary'}
                        onClick={() => setSortBy('mostPurchased')}
                    >
                        {t('ranking.mostPurchased')}
                    </Button>
                    <Button
                        variant={sortBy === 'leastPurchased' ? 'primary' : 'secondary'}
                        onClick={() => setSortBy('leastPurchased')}
                    >
                        {t('ranking.leastPurchased')}
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {products.map((product, index) => (
                        <StatRow
                            key={product.id}
                            number={index + 1}
                            badgeIcon={getProductIcon(product.iconType)}
                            title={product.name}
                            leftIcon={<ShoppingCart size={16} color="currentColor" />}
                            leftText={`${product.soldCount} pcs`}
                            rightIcon={<CircleDollarSign size={16} color="currentColor" />}
                            rightText={`${product.revenue} PLN`}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}