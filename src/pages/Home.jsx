import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLivePrices } from '../context/LivePricesContext';
import { useAuth } from '../context/AuthContext';
import useReveal from '../hooks/useReveal';

import heroImg from '../assets/Hero__4_.avif';
import advancedImg from '../assets/Advanced.avif';
import zeroFeesImg from '../assets/zero_fees_us.avif';
import baseAppImg from '../assets/CB_LOLP__1_.avif';
import takeControlImg from '../assets/image.avif';

function Reveal({ children, variant = 'reveal-fade-up', delay = '', className = '', style = {} }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${variant} ${delay} ${className}`} style={style}>
      {children}
    </div>
  );
}

const coinColors = {
  bitcoin:     '#F59E0B',
  ethereum:    '#6366F1',
  tether:      '#14B8A6',
  binancecoin: '#EAB308',
  solana:      '#8B5CF6',
  usdcoin:     '#3B82F6',
  cardano:     '#1D4ED8',
  ripple:      '#0EA5E9',
  dogecoin:    '#F59E0B',
  polkadot:    '#EC4899',
};

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [email3, setEmail3] = useState('');

  const handleEmailSubmit = (e, emailVal) => {
    e.preventDefault();
    if (!emailVal) return;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailVal)) {
      alert("Please enter a valid email address.");
      return;
    }
    navigate(`/signup?email=${encodeURIComponent(emailVal)}`);
  };
  const { coins, gainers, newListings, loading, error } = useLivePrices() ?? {};
  const [activeTab, setActiveTab] = useState('tradable');
  const allCoins = coins || [];
  const topCryptos = allCoins.slice(0, 6);
  const topGainers = (gainers || []).slice(0, 6);
  const latest = (newListings || []).slice(0, 6);
  const activeList = activeTab === 'tradable' ? topCryptos : activeTab === 'gainers' ? topGainers : latest;

  const exploreRef     = useReveal();
  const advancedRef    = useReveal();
  const coinbaseOneRef = useReveal();
  const baseAppRef     = useReveal();
  const learnHdrRef    = useReveal();
  const takeControlRef = useReveal();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD',
      minimumFractionDigits: 2, maximumFractionDigits: 2,
    }).format(price);

  return (
    <div style={{ overflowX: 'hidden' }} className="home-page">

      {/* ═══════ HERO ═══════ */}
      <section style={{ background: '#ffffff', padding: '56px 0 40px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="hero-grid">
          <div className="hero-anim-left">
            <div style={{ position: 'relative', maxWidth: '420px', margin: '0 auto' }}>
              <img src={heroImg} alt="Coinbase app" style={{ position: 'relative', zIndex: 1, width: '100%', borderRadius: '22px', boxShadow: '0 28px 64px rgba(0,0,0,0.18)', display: 'block' }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '16px', textAlign: 'center' }}>
              Stocks and prediction markets not available in your jurisdiction.
            </p>
          </div>
          <div className="hero-anim-right">
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: '800', color: '#111827', lineHeight: '1.1', letterSpacing: '-0.035em', marginBottom: '16px' }}>
              The future of<br />finance is here.
            </h1>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', marginBottom: '32px', lineHeight: '1.6' }}>
              Trade crypto and more on a platform you can trust.
            </p>
            <div style={{ display: 'flex', gap: '8px' }} className="hero-cta-row">
              {!user ? (
                <form onSubmit={(e) => handleEmailSubmit(e, email2)} style={{ display: 'flex', gap: '8px', width: '100%' }}>
                  <input
                    type="email"
                    required
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    placeholder="satoshi@nakamoto.com"
                    style={{ flex: 1, padding: '13px 16px', border: '1.5px solid #E5E7EB', borderRadius: '8px', fontSize: '0.9375rem', color: '#111827', outline: 'none', minWidth: 0 }}
                  />
                  <button
                    type="submit"
                    style={{ background: '#1652F0', border: 'none', cursor: 'pointer', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 24px', borderRadius: '8px', whiteSpace: 'nowrap', flexShrink: 0, display: 'inline-flex', alignItems: 'center' }}
                  >
                    Sign up
                  </button>
                </form>
              ) : (
                <Link
                  to="/dashboard"
                  style={{ background: '#1652F0', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center' }}
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ EXPLORE CRYPTO ═══════ */}
      <section style={{ background: '#F9FAFB', padding: '80px 0', borderTop: '1px solid #F3F4F6' }}>
        <div ref={exploreRef} style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="explore-grid reveal reveal-fade-up">
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', lineHeight: '1.15', marginBottom: '16px' }}>
              Explore crypto like Bitcoin,<br />Ethereum, and Dogecoin.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '32px' }}>
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Link to="/explore" style={{ display: 'inline-block', background: '#111827', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 28px', borderRadius: '99px', textDecoration: 'none' }}>
              See more assets
            </Link>
          </div>

          <div style={{ background: '#0A0B0D', borderRadius: '20px', padding: '20px', boxShadow: '0 20px 48px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '16px', background: '#1C1C1E', padding: '4px', borderRadius: '10px' }}>
              {[['tradable','Tradable'],['gainers','Top gainers'],['new','New on Coinbase']].map(([k, lbl]) => (
                <button key={k} onClick={() => setActiveTab(k)} style={{ flex: 1, padding: '8px 4px', borderRadius: '7px', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: '600', background: activeTab === k ? '#ffffff' : 'transparent', color: activeTab === k ? '#111827' : '#6B7280', transition: 'all 0.15s' }}>
                  {lbl}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {loading && (
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', padding: '8px' }}>
                  Loading market data...
                </p>
              )}
              {error && !loading && (
                <p style={{ color: '#FCA5A5', fontSize: '0.875rem', padding: '8px' }}>
                  {error}
                </p>
              )}
              {!loading && !error && activeList.map((crypto) => {
                const isUp = crypto.change24h >= 0;
                const iconColor = coinColors[crypto.id] || '#6B7280';
                return (
                  <Link key={crypto.id} to={'/asset/' + crypto.id}
                    style={{ display: 'flex', alignItems: 'center', padding: '10px 8px', borderRadius: '10px', textDecoration: 'none', background: 'transparent', transition: 'background 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1C1C1E'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '10px' }}>
                      <span style={{ color: '#fff', fontWeight: '800', fontSize: '11px' }}>{crypto.symbol.slice(0,2).toUpperCase()}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '14px', fontWeight: '600', color: '#F3F4F6', margin: 0 }}>{crypto.name}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '13px', fontWeight: '700', color: '#F3F4F6', margin: 0, fontVariantNumeric: 'tabular-nums' }}>{formatPrice(crypto.price)}</p>
                      <p style={{ fontSize: '11px', fontWeight: '600', color: isUp ? '#22C55E' : '#EF4444', margin: 0 }}>{isUp ? '\u2197' : '\u2198'} {Math.abs(crypto.change24h).toFixed(2)}%</p>
                    </div>
                  </Link>
                );
              })}
              {!loading && !error && activeList.length === 0 && (
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', padding: '8px' }}>
                  No data available.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ADVANCED TRADING ═══════ */}
      <section style={{ padding: '88px 0', background: '#ffffff' }}>
        <div ref={advancedRef} style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="hero-grid reveal reveal-left">
          <div>
            <img src={advancedImg} alt="Advanced trading tools" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: '800', color: '#111827', lineHeight: '1.12', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Powerful tools, designed<br />for the advanced trader.
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '32px' }}>
              Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <Link to="/advanced-trading" style={{ display: 'inline-block', background: '#111827', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 28px', borderRadius: '99px', textDecoration: 'none' }}>
              Start trading
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ COINBASE ONE — ZERO FEES ═══════ */}
      <section style={{ padding: '88px 0', background: '#ffffff' }}>
        <div ref={coinbaseOneRef} style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="explore-grid reveal reveal-right">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1.5px solid #E5E7EB', borderRadius: '99px', padding: '5px 12px', marginBottom: '20px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#1652F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '7px', fontWeight: '900' }}>C</span>
              </div>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase' }}>COINBASE ONE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: '800', color: '#111827', lineHeight: '1.1', letterSpacing: '-0.035em', marginBottom: '16px' }}>
              Zero trading fees,<br />more rewards.
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '24px' }}>
              Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
            </p>
            {!user ? (
              <Link to="/signup" style={{ display: 'inline-block', background: '#111827', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 28px', borderRadius: '99px', textDecoration: 'none' }}>
                Claim free trial
              </Link>
            ) : (
              <Link to="/dashboard" style={{ display: 'inline-block', background: '#111827', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 28px', borderRadius: '99px', textDecoration: 'none' }}>
                Go to Dashboard
              </Link>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: '#F3F4F6', borderRadius: '24px', padding: '24px', maxWidth: '360px', width: '100%' }}>
              <img src={zeroFeesImg} alt="Coinbase One — zero trading fees" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BASE APP ═══════ */}
      <section style={{ padding: '88px 0', background: '#ffffff' }}>
        <div ref={baseAppRef} style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="hero-grid reveal reveal-left">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: '#F3F4F6', borderRadius: '24px', padding: '24px', maxWidth: '380px', width: '100%' }}>
              <img src={baseAppImg} alt="Base App" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
            </div>
          </div>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1.5px solid #E5E7EB', borderRadius: '99px', padding: '5px 12px', marginBottom: '20px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#1652F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '7px', fontWeight: '900' }}>C</span>
              </div>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#374151', letterSpacing: '0.05em', textTransform: 'uppercase' }}>BASE APP</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: '800', color: '#111827', lineHeight: '1.12', letterSpacing: '-0.03em', marginBottom: '16px' }}>
              Countless ways to earn<br />crypto with the Base App.
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '24px' }}>
              An everything app to trade, create, discover, and chat, all in one place.
            </p>
            <Link to="/explore" style={{ display: 'inline-block', background: '#111827', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 28px', borderRadius: '99px', textDecoration: 'none' }}>
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ NEW TO CRYPTO — LEARN BASICS ═══════ */}
      <section style={{ padding: '80px 0 72px', background: '#F3F4F6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
          <div ref={learnHdrRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-end', marginBottom: '40px' }} className="explore-grid reveal reveal-fade-up">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#111827', lineHeight: '1.12', letterSpacing: '-0.03em', margin: 0 }}>
              New to crypto?<br />Learn some<br />crypto basics
            </h2>
            <div>
              <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: '1.65', marginBottom: '20px' }}>
                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
              </p>
              <Link to="/learn" style={{ display: 'inline-block', background: '#111827', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '12px 26px', borderRadius: '99px', textDecoration: 'none' }}>
                Read More
              </Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="article-grid">
            {[
              {
                bg: '#0A0B0D',
                illustration: (
                  <svg viewBox="0 0 260 140" width="100%" height="140">
                    <rect width="260" height="140" fill="#0A0B0D"/>
                    <circle cx="130" cy="70" r="50" fill="none" stroke="#1652F0" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6"/>
                    <circle cx="130" cy="70" r="35" fill="none" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
                    <circle cx="130" cy="70" r="22" fill="#1652F0" opacity="0.9"/>
                    <text x="130" y="77" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900">$</text>
                    {[[70,30,'#EF4444'],[180,35,'#F59E0B'],[195,95,'#22C55E'],[70,110,'#8B5CF6'],[155,115,'#3B82F6']].map(([cx,cy,c],i)=>(
                      <circle key={i} cx={cx} cy={cy} r="7" fill={c} opacity="0.9"/>
                    ))}
                    <line x1="130" y1="48" x2="130" y2="30" stroke="#1652F0" strokeWidth="1.5" opacity="0.4"/>
                    <line x1="130" y1="48" x2="180" y2="35" stroke="#1652F0" strokeWidth="1" opacity="0.3" strokeDasharray="3 2"/>
                    <line x1="130" y1="48" x2="70" y2="30" stroke="#1652F0" strokeWidth="1" opacity="0.3" strokeDasharray="3 2"/>
                  </svg>
                ),
                title: 'USDC: The digital dollar for the global crypto economy',
                desc: 'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...',
              },
              {
                bg: '#3B82F6',
                illustration: (
                  <svg viewBox="0 0 260 140" width="100%" height="140">
                    <rect width="260" height="140" fill="#3B82F6"/>
                    <rect x="80" y="30" width="100" height="68" rx="8" fill="#fff" opacity="0.95"/>
                    <rect x="90" y="38" width="80" height="8" rx="3" fill="#E5E7EB"/>
                    <rect x="90" y="52" width="60" height="6" rx="2" fill="#F3F4F6"/>
                    <rect x="90" y="64" width="70" height="6" rx="2" fill="#F3F4F6"/>
                    <rect x="95" y="78" width="30" height="12" rx="6" fill="#1652F0"/>
                    <text x="110" y="88" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">PAY</text>
                    <circle cx="100" cy="115" r="9" fill="#F59E0B" opacity="0.9"/>
                    <text x="100" y="119" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="900">$</text>
                    <circle cx="160" cy="115" r="9" fill="#F59E0B" opacity="0.9"/>
                    <text x="160" y="119" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="900">$</text>
                    {[[68,28],[190,28],[68,112],[190,112]].map(([cx,cy],i)=>(
                      <g key={i}><line x1={cx} y1={cy} x2="130" y2="70" stroke="#fff" strokeWidth="0.8" opacity="0.3"/></g>
                    ))}
                  </svg>
                ),
                title: 'Can crypto really replace your bank account?',
                desc: "If you're a big enough fan of crypto, you've probably heard the phrase \"be your own bank\" or the term \"bankless\" — the idea being that...",
              },
              {
                bg: '#D1FAE5',
                illustration: (
                  <svg viewBox="0 0 260 140" width="100%" height="140">
                    <rect width="260" height="140" fill="#D1FAE5"/>
                    <circle cx="130" cy="65" r="30" fill="#F59E0B" opacity="0.95"/>
                    <text x="130" y="73" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900">₿</text>
                    {[[60,50,'#E5E7EB'],[185,45,'#F3F4F6'],[55,90,'#E5E7EB'],[195,90,'#F3F4F6'],[90,115,'#E5E7EB'],[165,115,'#F3F4F6']].map(([cx,cy,c],i)=>(
                      <g key={i}>
                        <rect x={cx-10} y={cy-10} width="20" height="20" rx="4" fill={c}/>
                        {i%2===0
                          ? <text x={cx} y={cy+5} textAnchor="middle" fill="#374151" fontSize="11" fontWeight="700">▣</text>
                          : <text x={cx} y={cy+5} textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="700">◈</text>
                        }
                      </g>
                    ))}
                    <path d="M60 55 Q90 60 100 65" stroke="#9CA3AF" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
                    <path d="M185 50 Q165 55 160 65" stroke="#9CA3AF" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
                    <path d="M90 35 Q95 48 100 55" stroke="#D97706" strokeWidth="1.5" fill="none" opacity="0.6"/>
                    <circle cx="130" cy="108" r="5" fill="#111827" opacity="0.6"/>
                    <line x1="130" y1="95" x2="130" y2="103" stroke="#111827" strokeWidth="1.5" opacity="0.4"/>
                  </svg>
                ),
                title: 'When is the best time to invest in crypto?',
                desc: 'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...',
              },
            ].map(({ bg, illustration, title, desc }, idx) => (
              <Reveal key={title} variant="reveal-scale" delay={`reveal-delay-${idx + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
              <Link to="/learn" style={{ display: 'block', textDecoration: 'none', background: '#fff', borderRadius: '16px', overflow: 'hidden', transition: 'box-shadow 0.2s', flex: 1 }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ background: bg, overflow: 'hidden' }}>
                  {illustration}
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#111827', margin: '0 0 10px', lineHeight: '1.4' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0, lineHeight: '1.6' }}>{desc}</p>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TAKE CONTROL ═══════ */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div ref={takeControlRef} style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="hero-grid reveal reveal-fade-up">
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: '800', color: '#111827', lineHeight: '1.12', letterSpacing: '-0.035em', marginBottom: '16px' }}>
              Take control<br />of your money
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
              Start your portfolio today and discover crypto
            </p>
            <div style={{ display: 'flex', gap: '8px' }} className="hero-cta-row">
              {!user ? (
                <form onSubmit={(e) => handleEmailSubmit(e, email3)} style={{ display: 'flex', gap: '8px', width: '100%' }}>
                  <input
                    type="email"
                    required
                    value={email3}
                    onChange={(e) => setEmail3(e.target.value)}
                    placeholder="satoshi@nakamoto.com"
                    style={{ flex: 1, padding: '13px 16px', border: '1.5px solid #E5E7EB', borderRadius: '8px', fontSize: '0.9375rem', color: '#111827', outline: 'none', minWidth: 0 }}
                  />
                  <button
                    type="submit"
                    style={{ background: '#1652F0', border: 'none', cursor: 'pointer', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 24px', borderRadius: '8px', whiteSpace: 'nowrap', flexShrink: 0, display: 'inline-flex', alignItems: 'center' }}
                  >
                    Sign up
                  </button>
                </form>
              ) : (
                <Link
                  to="/dashboard"
                  style={{ background: '#1652F0', color: '#fff', fontWeight: '700', fontSize: '0.9375rem', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center' }}
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={takeControlImg} alt="Take control of your money" style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ═══════ DISCLAIMER ═══════ */}
      <section style={{ padding: '48px 24px 64px', background: '#ffffff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginBottom: '16px' }}>
            DEX trading is offered by Coinbase Bermuda Technologies Ltd.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: '1.6', margin: 0 }}>
            Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
