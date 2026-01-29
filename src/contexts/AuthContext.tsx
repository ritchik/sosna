// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { User, Account } from '../types';

// Mock data for users and their accounts
const mockUsers: Record<string, { user: User; accounts: Account[] }> = {
  'seller1': {
    user: { id: 'seller1', name: 'Jan Kowalski' },
    accounts: [
      { id: 'acc1', name: 'Elektronika', type: 'electronics' },
      { id: 'acc2', name: 'Moda', type: 'fashion' },
      { id: 'acc3', name: 'Dom i Ogród', type: 'home' },
    ],
  },
  'seller2': {
    user: { id: 'seller2', name: 'Anna Nowak' },
    accounts: [
      { id: 'acc4', name: 'Książki', type: 'books' },
      { id: 'acc5', name: 'Zabawki', type: 'toys' },
    ],
  },
  'demo': {
    user: { id: 'demo', name: 'Demo User' },
    accounts: [
      { id: 'demo1', name: 'Demo Account', type: 'demo' },
    ],
  },
};

interface AuthContextType {
  user: User | null;
  accounts: Account[];
  currentAccount: Account | null;
  isAuthenticated: boolean;
  login: (userId: string) => boolean;
  logout: () => void;
  switchAccount: (accountId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [currentAccount, setCurrentAccount] = useState<Account | null>(null);

  // Check for saved session on mount
  useEffect(() => {
    const savedUserId = localStorage.getItem('userId');
    const savedAccountId = localStorage.getItem('accountId');

    if (savedUserId && mockUsers[savedUserId]) {
      const userData = mockUsers[savedUserId];
      setUser(userData.user);
      setAccounts(userData.accounts);

      const savedAccount = userData.accounts.find(a => a.id === savedAccountId);
      setCurrentAccount(savedAccount || userData.accounts[0]);
    }
  }, []);

  const login = useCallback((userId: string): boolean => {
    const normalizedId = userId.toLowerCase().trim();
    const userData = mockUsers[normalizedId];

    if (userData) {
      setUser(userData.user);
      setAccounts(userData.accounts);
      setCurrentAccount(userData.accounts[0]);

      localStorage.setItem('userId', normalizedId);
      localStorage.setItem('accountId', userData.accounts[0].id);

      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setAccounts([]);
    setCurrentAccount(null);

    localStorage.removeItem('userId');
    localStorage.removeItem('accountId');
  }, []);

  const switchAccount = useCallback((accountId: string) => {
    const account = accounts.find(a => a.id === accountId);
    if (account) {
      setCurrentAccount(account);
      localStorage.setItem('accountId', accountId);
    }
  }, [accounts]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accounts,
        currentAccount,
        isAuthenticated: !!user,
        login,
        logout,
        switchAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
