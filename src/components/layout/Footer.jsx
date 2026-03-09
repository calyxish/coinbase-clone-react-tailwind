import { Link } from 'react-router-dom';

/* Each column in the main footer grid. Some visual columns contain multiple
   sections (heading + links), so we model them as groups. */
const FOOTER_COLUMNS = [
  // Column 1 – Company
  [
    {
      heading: 'Company',
      links: [
        'About', 'Careers', 'Affiliates', 'Blog', 'Press', 'Security',
        'Investors', 'Vendors', 'Legal & privacy', 'Cookie policy',
        'Cookie preferences', 'Digital Asset Disclosures',
      ],
    },
  ],
  // Column 2 – Learn
  [
    {
      heading: 'Learn',
      links: [
        'Explore', 'Market statistics', 'Coinbase Bytes newsletter',
        'Crypto basics', 'Tips & tutorials', 'Crypto glossary',
        'Market updates', 'What is Bitcoin?', 'What is crypto?',
        'What is a blockchain?', 'How to set up a crypto wallet?',
        'How to send crypto?', 'Taxes',
      ],
    },
  ],
  // Column 3 – Individuals / Businesses / Institutions
  [
    {
      heading: 'Individuals',
      links: ['Buy & sell', 'Earn free crypto', 'Base App', 'Coinbase One', 'Debit Card'],
    },
    {
      heading: 'Businesses',
      links: ['Asset Listings', 'Coinbase Business', 'Payments', 'Commerce', 'Token Manager'],
    },
    {
      heading: 'Institutions',
      links: ['Prime', 'Staking', 'Exchange', 'International Exchange', 'Derivatives Exchange', 'Verified Pools'],
    },
  ],
  // Column 4 – Developers
  [
    {
      heading: 'Developers',
      links: [
        'Developer Platform', 'Base', 'Server Wallets', 'Embedded Wallets',
        'Base Accounts (Smart Wallets)', 'Onramp & Offramp', 'x402',
        'Trade API', 'Paymaster', 'OnchainKit', 'Data API', 'Verifications',
        'Node', 'AgentKit', 'Staking', 'Faucet', 'Exchange API',
        'International Exchange API', 'Prime API', 'Derivatives API',
      ],
    },
  ],
  // Column 5 – Support / Asset prices / Stock prices
  [
    {
      heading: 'Support',
      links: [
        'Help center', 'Contact us', 'Create account', 'ID verification',
        'Account information', 'Payment methods', 'Account access',
        'Supported crypto', 'Status',
      ],
    },
    {
      heading: 'Asset prices',
      links: ['Bitcoin price', 'Ethereum price', 'Solana price', 'XRP price'],
    },
    {
      heading: 'Stock prices',
      links: ['NVIDIA price', 'Apple price', 'Microsoft price', 'Amazon price'],
    },
  ],
];

const linkStyle = { fontSize: '0.875rem', color: '#4B5563', textDecoration: 'none', lineHeight: '1.7' };

function FooterSection({ heading, links }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h4 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#111827', marginBottom: '14px' }}>{heading}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {links.map(label => (
          <li key={label}>
            <Link
              to="/explore"
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#1652F0'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#4B5563'; }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#f8f8f8', marginTop: 'auto' }}>
      {/* Main grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 32px 32px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>

        {/* Logo */}
        <div style={{ flex: '0 0 48px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0052FF" d="M20.032 28.5c-4.705 0-8.516-3.804-8.516-8.5s3.81-8.5 8.516-8.5a8.51 8.51 0 0 1 8.388 7.083H37C36.276 9.857 28.96 3 20.032 3 10.629 3 3 10.615 3 20s7.629 17 17.032 17C28.959 37 36.276 30.143 37 21.417h-8.58a8.51 8.51 0 0 1-8.388 7.083"/>
            </svg>
          </Link>
        </div>

        {/* Link columns */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', minWidth: 0 }} className="footer-cols">
          {FOOTER_COLUMNS.map((sections, colIdx) => (
            <div key={colIdx}>
              {sections.map(section => (
                <FooterSection key={section.heading} heading={section.heading} links={section.links} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Social row */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* X / Twitter */}
          <a href="#" aria-label="X" style={{ color: '#6B7280', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.845L2.25 2.25h6.956l4.257 5.626L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" style={{ color: '#6B7280', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" style={{ color: '#6B7280', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          {/* TikTok */}
          <a href="#" aria-label="TikTok" style={{ color: '#6B7280', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }} className="footer-bottom-bar">
          {/* Legal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8125rem', color: '#9CA3AF' }}>© {new Date().getFullYear()} Coinbase</span>
            {['Privacy', 'Terms & Conditions'].map(item => (
              <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#D1D5DB' }}>•</span>
                <a
                  href="#"
                  style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#111827'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; }}
                >
                  {item}
                </a>
              </span>
            ))}
          </div>
          {/* Language selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#6B7280' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>Global</span>
            <span style={{ color: '#D1D5DB' }}>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
