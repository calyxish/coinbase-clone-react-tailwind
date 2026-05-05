import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services';

const LivePricesContext = createContext(null);

export function LivePricesProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isActive = true;

    const loadData = async () => {
      setError('');
      setLoading(true);
      try {
        const [all, top, fresh] = await Promise.all([
          api.get('/crypto'),
          api.get('/crypto/gainers'),
          api.get('/crypto/new'),
        ]);

        if (!isActive) return;
        setCoins(all.data || []);
        setGainers(top.data || []);
        setNewListings(fresh.data || []);
      } catch (err) {
        if (!isActive) return;
        setError(err?.message || 'Failed to load crypto data.');
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <LivePricesContext.Provider value={{ coins, gainers, newListings, loading, error }}>
      {children}
    </LivePricesContext.Provider>
  );
}

export const useLivePrices = () => useContext(LivePricesContext);
