import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../services';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshProfile = async () => {
    try {
      const data = await api.get('/profile');
      setUser(data.user || null);
      return data.user || null;
    } catch (err) {
      setUser(null);
      return null;
    }
  };

  useEffect(() => {
    let isActive = true;

    const loadProfile = async () => {
      try {
        await refreshProfile();
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadProfile();

    return () => {
      isActive = false;
    };
  }, []);

  const login = async (email, password) => {
    setError(null);
    const data = await api.post('/login', { email, password });
    setUser(data.user || null);
    return data.user || null;
  };

  const register = async (name, email, password) => {
    setError(null);
    const data = await api.post('/register', { name, email, password });
    setUser(data.user || null);
    return data.user || null;
  };

  const logout = async () => {
    setError(null);
    await api.post('/logout', {});
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      setError,
      login,
      register,
      logout,
      refreshProfile,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
