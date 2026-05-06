import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { api } from '../services';

const LivePricesContext = createContext(null);

export function LivePricesProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refreshPrices = useCallback(async () => {
    setError('');
    setLoading(true);
    try {
      const [all, top, fresh] = await Promise.all([
        api.get('/crypto'),
        api.get('/crypto/gainers'),
        api.get('/crypto/new'),
      ]);

      setCoins(all.data || []);
      setGainers(top.data || []);
      setNewListings(fresh.data || []);
    } catch (err) {
      setError(err?.message || 'Failed to load crypto data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isActive = true;

    const loadData = async () => {
      if (!isActive) return;
      await refreshPrices();
    };

    loadData();

    return () => {
      isActive = false;
    };
  }, [refreshPrices]);

  return (
    <LivePricesContext.Provider value={{ coins, gainers, newListings, loading, error, refreshPrices }}>
      {children}
    </LivePricesContext.Provider>
  );
}

export const useLivePrices = () => useContext(LivePricesContext);
