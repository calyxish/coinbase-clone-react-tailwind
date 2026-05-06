import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services';
import { useLivePrices } from '../context/LivePricesContext';

export default function AddCrypto() {
  const navigate = useNavigate();
  const { refreshPrices } = useLivePrices() ?? {};
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price: '',
    image: '',
    change24h: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await api.post('/crypto', {
        name: formData.name,
        symbol: formData.symbol,
        price: parseFloat(formData.price),
        image: formData.image,
        change24h: parseFloat(formData.change24h)
      });
      
      // Trigger a refresh of the context data so the dashboard updates instantly
      if (refreshPrices) {
        await refreshPrices();
      }

      // Give it a brief moment so the user sees it succeeded
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    } catch (err) {
      setError(err?.message || 'Failed to add cryptocurrency.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#F9FAFB', minHeight: 'calc(100vh - 65px)', padding: '60px 24px' }}>
      <div style={{ maxWidth: '540px', margin: '0 auto', background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 12px 32px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', margin: '0 0 8px', letterSpacing: '-0.03em' }}>
          Add New Asset
        </h1>
        <p style={{ color: '#6B7280', fontSize: '0.9375rem', margin: '0 0 32px', lineHeight: '1.6' }}>
          List a new cryptocurrency to be available on the platform.
        </p>

        {error && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '12px 16px', borderRadius: '12px', marginBottom: '24px', fontSize: '0.9375rem', fontWeight: '500' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>
              Asset Name
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. Polygon"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', background: '#F9FAFB', transition: 'border-color 0.2s' }}
              onFocus={e => { e.target.style.borderColor = '#1652F0'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = '#F9FAFB'; }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>
              Ticker Symbol
            </label>
            <input 
              type="text" 
              name="symbol"
              placeholder="e.g. MATIC"
              value={formData.symbol}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', background: '#F9FAFB', textTransform: 'uppercase', transition: 'border-color 0.2s' }}
              onFocus={e => { e.target.style.borderColor = '#1652F0'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = '#F9FAFB'; }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>
                Price (USD)
              </label>
              <input 
                type="number" 
                name="price"
                placeholder="0.00"
                step="0.000001"
                min="0"
                value={formData.price}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', background: '#F9FAFB', transition: 'border-color 0.2s' }}
                onFocus={e => { e.target.style.borderColor = '#1652F0'; e.target.style.background = '#fff'; }}
                onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = '#F9FAFB'; }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>
                24h Change (%)
              </label>
              <input 
                type="number" 
                name="change24h"
                placeholder="e.g. 5.2 or -1.5"
                step="0.01"
                value={formData.change24h}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', background: '#F9FAFB', transition: 'border-color 0.2s' }}
                onFocus={e => { e.target.style.borderColor = '#1652F0'; e.target.style.background = '#fff'; }}
                onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = '#F9FAFB'; }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.875rem', marginBottom: '8px' }}>
              Image URL
            </label>
            <input 
              type="url" 
              name="image"
              placeholder="https://example.com/icon.png"
              value={formData.image}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', background: '#F9FAFB', transition: 'border-color 0.2s' }}
              onFocus={e => { e.target.style.borderColor = '#1652F0'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.background = '#F9FAFB'; }}
            />
          </div>

          <div style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
            <button 
              type="button"
              onClick={() => navigate('/dashboard')}
              style={{ flex: 1, padding: '14px', background: '#F3F4F6', color: '#374151', border: 'none', borderRadius: '99px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; }}
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={loading}
              style={{ flex: 2, padding: '14px', background: loading ? '#9CA3AF' : '#1652F0', color: '#fff', border: 'none', borderRadius: '99px', fontWeight: '700', fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onMouseEnter={e => { if(!loading) e.currentTarget.style.background = '#0A38B8'; }}
              onMouseLeave={e => { if(!loading) e.currentTarget.style.background = '#1652F0'; }}
            >
              {loading ? (
                <div style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
              ) : 'Add Asset'}
            </button>
          </div>
        </form>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
