export interface User {
  id: string;
  name: string;
}

export interface Account {
  id: string;
  name: string;
  type: string;
}

export interface QualityAspect {
  id: string;
  name: string;
  score: number;
  maxScore: number;
}

export interface SalesQuality {
  totalScore: number;
  maxScore: number;
  category: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND';
  aspects: QualityAspect[];
}

export interface Review {
  id: string;
  rating: number;
  author: string;
  date: string;
  text?: string;
  type: 'positive' | 'negative';
}

export interface SalesDataPoint {
  name: string;
  current: number;
  previous: number;
  isIncomplete?: boolean;
}

export type ThemeMode = 'light' | 'dark';
