import type { SalesQuality, QualityAspect, Review, SalesDataPoint } from '../types';

// Orders data
export const ordersData: Record<string, { unpaid: number; notShipped: number; returns: number }> = {
  acc1: { unpaid: 92, notShipped: 11, returns: 3 },
  acc2: { unpaid: 45, notShipped: 8, returns: 1 },
  acc3: { unpaid: 23, notShipped: 5, returns: 2 },
  acc4: { unpaid: 67, notShipped: 15, returns: 4 },
  acc5: { unpaid: 12, notShipped: 3, returns: 0 },
  demo1: { unpaid: 0, notShipped: 0, returns: 0 },
};

// Quality aspects
const qualityAspectsData: Record<string, QualityAspect[]> = {
  acc1: [
    { id: '1', name: 'shippingTime', score: 94, maxScore: 100 },
    { id: '2', name: 'claims', score: 98, maxScore: 100 },
    { id: '3', name: 'communication', score: 98, maxScore: 100 },
    { id: '4', name: 'returns', score: 85, maxScore: 100 },
    { id: '5', name: 'cancellations', score: 92, maxScore: 100 },
    { id: '6', name: 'customerService', score: 96, maxScore: 100 },
  ],
  acc2: [
    { id: '1', name: 'shippingTime', score: 88, maxScore: 100 },
    { id: '2', name: 'claims', score: 95, maxScore: 100 },
    { id: '3', name: 'communication', score: 90, maxScore: 100 },
    { id: '4', name: 'returns', score: 82, maxScore: 100 },
    { id: '5', name: 'cancellations', score: 88, maxScore: 100 },
    { id: '6', name: 'customerService', score: 91, maxScore: 100 },
  ],
  acc3: [
    { id: '1', name: 'shippingTime', score: 75, maxScore: 100 },
    { id: '2', name: 'claims', score: 80, maxScore: 100 },
    { id: '3', name: 'communication', score: 85, maxScore: 100 },
    { id: '4', name: 'returns', score: 70, maxScore: 100 },
    { id: '5', name: 'cancellations', score: 78, maxScore: 100 },
    { id: '6', name: 'customerService', score: 82, maxScore: 100 },
  ],
  acc4: [
    { id: '1', name: 'shippingTime', score: 99, maxScore: 100 },
    { id: '2', name: 'claims', score: 100, maxScore: 100 },
    { id: '3', name: 'communication', score: 99, maxScore: 100 },
    { id: '4', name: 'returns', score: 98, maxScore: 100 },
    { id: '5', name: 'cancellations', score: 99, maxScore: 100 },
    { id: '6', name: 'customerService', score: 100, maxScore: 100 },
  ],
  acc5: [
    { id: '1', name: 'shippingTime', score: 60, maxScore: 100 },
    { id: '2', name: 'claims', score: 65, maxScore: 100 },
    { id: '3', name: 'communication', score: 70, maxScore: 100 },
    { id: '4', name: 'returns', score: 55, maxScore: 100 },
    { id: '5', name: 'cancellations', score: 62, maxScore: 100 },
    { id: '6', name: 'customerService', score: 68, maxScore: 100 },
  ],
  demo1: [],
};

export function getSalesQuality(accountId: string): SalesQuality | null {
  const aspects = qualityAspectsData[accountId];
  if (!aspects || aspects.length === 0) return null;

  const totalScore = aspects.reduce((sum, a) => sum + a.score, 0);
  const maxScore = aspects.reduce((sum, a) => sum + a.maxScore, 0);
  const percentage = (totalScore / maxScore) * 100;

  const category = percentage >= 95 ? 'DIAMOND' : percentage >= 85 ? 'PLATINUM' : percentage >= 75 ? 'GOLD' : percentage >= 60 ? 'SILVER' : 'BRONZE';

  return { totalScore, maxScore, category, aspects };
}

// Reviews
export const reviewsData: Record<string, Review[]> = {
  acc1: [
    { id: '1', rating: 4, author: 'Anna K.', date: '2 dni temu', text: 'Dobra jakość', type: 'positive' },
    { id: '2', rating: 5, author: 'Jan D.', date: '2 dni temu', text: 'Świetne!', type: 'positive' },
    { id: '3', rating: 5, author: 'Maria S.', date: '3 dni temu', text: 'Polecam', type: 'positive' },
    { id: '4', rating: 2, author: 'Piotr W.', date: '4 dni temu', text: 'Niezgodne z opisem', type: 'negative' },
    { id: '5', rating: 5, author: 'Kasia L.', date: '5 dni temu', text: 'Szybka wysyłka', type: 'positive' },
  ],
  acc2: [
    { id: '1', rating: 5, author: 'Tomasz B.', date: '1 dzień temu', text: 'Super jakość', type: 'positive' },
    { id: '2', rating: 3, author: 'Ewa M.', date: '2 dni temu', text: 'OK', type: 'positive' },
    { id: '3', rating: 1, author: 'Robert K.', date: '3 dni temu', text: 'Słabe', type: 'negative' },
  ],
  acc3: [
    { id: '1', rating: 5, author: 'Zofia N.', date: '1 dzień temu', text: 'Piękne', type: 'positive' },
    { id: '2', rating: 4, author: 'Marek T.', date: '3 dni temu', text: 'Dobra jakość', type: 'positive' },
  ],
  acc4: [
    { id: '1', rating: 5, author: 'Michał K.', date: '1 dzień temu', text: 'Świetna książka', type: 'positive' },
    { id: '2', rating: 5, author: 'Joanna S.', date: '2 dni temu', text: 'Szybka wysyłka', type: 'positive' },
    { id: '3', rating: 5, author: 'Paweł M.', date: '3 dni temu', text: 'Polecam', type: 'positive' },
  ],
  acc5: [
    { id: '1', rating: 3, author: 'Natalia R.', date: '2 dni temu', text: 'Średnio', type: 'positive' },
    { id: '2', rating: 2, author: 'Damian O.', date: '4 dni temu', text: 'Nie działa', type: 'negative' },
  ],
  demo1: [],
};

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  return Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10;
}

// Chart data
export function getSalesChartData(period: 'today' | 'current_week' | 'previous_week', lang: 'pl' | 'en'): SalesDataPoint[] {
  const days = lang === 'pl' ? ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nie'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDay = new Date().getDay();
  const dayIndex = currentDay === 0 ? 6 : currentDay - 1;

  if (period === 'today') {
    const hour = new Date().getHours();
    return Array.from({ length: 24 }, (_, i) => ({
      name: `${i}:00`,
      current: Math.floor(Math.random() * 500) + 100,
      previous: Math.floor(Math.random() * 500) + 100,
      isIncomplete: i >= hour,
    }));
  }

  return days.map((name, i) => ({
    name,
    current: Math.floor(Math.random() * 5000) + 1000,
    previous: Math.floor(Math.random() * 5000) + 1000,
    isIncomplete: period === 'current_week' && i >= dayIndex,
  }));


}

// Product ranking data
export interface Product {
  id: string;
  name: string;
  iconType: string;
  soldCount: number;
  revenue: number;
}

export const productsData: Record<string, Product[]> = {
  acc1: [
    { id: '1', name: 'Wireless Headphones', iconType: 'headphones', soldCount: 234, revenue: 690 },
    { id: '2', name: 'Keyboard', iconType: 'keyboard', soldCount: 189, revenue: 450 },
    { id: '3', name: 'Mouse', iconType: 'mouse', soldCount: 156, revenue: 320 },
    { id: '4', name: 'Monitor', iconType: 'monitor', soldCount: 87, revenue: 1200 },
  ],
  acc2: [
    { id: '1', name: 'T-Shirt', iconType: 'shirt', soldCount: 456, revenue: 890 },
    { id: '2', name: 'Jeans', iconType: 'shirt', soldCount: 234, revenue: 670 },
    { id: '3', name: 'Sneakers', iconType: 'footprints', soldCount: 123, revenue: 540 },
    { id: '4', name: 'Hat', iconType: 'shirt', soldCount: 98, revenue: 180 },
  ],
  acc3: [
    { id: '1', name: 'Lamp', iconType: 'lightbulb', soldCount: 178, revenue: 420 },
    { id: '2', name: 'Chair', iconType: 'armchair', soldCount: 145, revenue: 890 },
    { id: '3', name: 'Table', iconType: 'square', soldCount: 67, revenue: 1100 },
    { id: '4', name: 'Rug', iconType: 'square', soldCount: 45, revenue: 230 },
  ],
  acc4: [
    { id: '1', name: 'Novel', iconType: 'book-open', soldCount: 567, revenue: 340 },
    { id: '2', name: 'Textbook', iconType: 'library', soldCount: 234, revenue: 560 },
    { id: '3', name: 'Comics', iconType: 'book', soldCount: 189, revenue: 210 },
    { id: '4', name: 'Magazine', iconType: 'newspaper', soldCount: 123, revenue: 90 },
  ],
  acc5: [
    { id: '1', name: 'LEGO Set', iconType: 'blocks', soldCount: 89, revenue: 450 },
    { id: '2', name: 'Doll', iconType: 'smile', soldCount: 67, revenue: 180 },
    { id: '3', name: 'Puzzle', iconType: 'puzzle', soldCount: 45, revenue: 90 },
    { id: '4', name: 'Board Game', iconType: 'dices', soldCount: 34, revenue: 120 },
  ],
  demo1: [],
};

export function getProductRanking(accountId: string, sortBy: 'mostPurchased' | 'leastPurchased'): Product[] {
  const products = productsData[accountId] || [];
  const sorted = [...products].sort((a, b) =>
    sortBy === 'mostPurchased' ? b.soldCount - a.soldCount : a.soldCount - b.soldCount
  );
  return sorted.slice(0, 4);
}
