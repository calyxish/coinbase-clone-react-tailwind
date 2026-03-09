import { Link } from "react-router-dom";
import cryptoBasicsIcon from "../assets/3.png";
import tipsIcon from "../assets/4.png";
import advancedTradingIcon from "../assets/AdvancedTrading_ChartsIndicatorsCandlesEtc.png";
import futuresIcon from "../assets/futures_anchor.png";

const featured = {
  tag: "VIDEO TUTORIAL",
  title: "When is the best time to invest in crypto?",
  description:
    "When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.",
  img: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
  alt: "Dollar cost averaging",
};

const popular = [
  { tag: "BEGINNER'S GUIDE", title: "What is cryptocurrency?" },
  { tag: "GETTING STARTED", title: "How to earn crypto rewards" },
  {
    tag: "GETTING STARTED",
    title: "How to add crypto to your Coinbase Wallet",
  },
  {
    tag: "TAXES",
    title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports",
  },
  { tag: "BEGINNER'S GUIDE", title: "Beginner's guide to dapps" },
  {
    tag: "MARKET UPDATE",
    title: "Everything you need to know about the first-ever U.S. Bitcoin ETF",
  },
];

const categories = [
  { name: "Crypto basics", icon: cryptoBasicsIcon, href: "/learn" },
  { name: "Tips and tutorials", icon: tipsIcon, href: "/learn" },
  { name: "Advanced trading", icon: advancedTradingIcon, href: "/learn" },
  { name: "Futures", icon: futuresIcon, href: "/learn" },
];

const cryptoBasicsArticles = [
  {
    tag: "BEGINNER'S GUIDE",
    title: "What is Bitcoin?",
    description:
      "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp",
    alt: "Bitcoin guide",
  },
  {
    tag: "BEGINNER'S GUIDE",
    title: "Guide to DeFi tokens and altcoins",
    description:
      "From Aave to Zcash, decide what to trade with our beginner's guide",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/3rv8jr1B1Z1dZ2EhHqo7dp/e74ddbf1cd4836b83d34fe5cec351d78/Alt-Coin.png",
    alt: "Altcoin tokens",
  },
];

const moreBasicsArticles = [
  {
    tag: "BEGINNER'S GUIDE",
    title: "What is Ethereum?",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png",
    alt: "What is Ethereum?",
  },
  {
    tag: "KEY TERM",
    title: "What is DeFi?",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg",
    alt: "What is DeFi?",
  },
  {
    tag: "BEGINNER'S GUIDE",
    title: "What is a stablecoin?",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/3hETt7h2hfvnOnVVrJIvlO/b7204c2b9a1a35d39d0dd396d2cf49bb/Learn_Illustration_What_is_a_stablecoin.jpg",
    alt: "What is a stablecoin?",
  },
  {
    tag: "GLOSSARY",
    title:
      "Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/5fZ31B0CLFBDfIWK3DQPTN/b98e564a067cbb252995d654006cee09/Group_31612615.png",
    alt: "Coin",
  },
];

const tutorialsArticles = [
  {
    tag: "VIDEO TUTORIAL",
    title: "How to set up a crypto wallet",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png",
    alt: "How to set up a crypto wallet",
  },
  {
    tag: "VIDEO TUTORIAL",
    title: "When is the best time to invest in crypto?",
    img: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
    alt: "Dollar cost averaging",
  },
];

function ArticleTag({ text }) {
  return (
    <p className="text-[11px] font-semibold text-[#5B616E] uppercase tracking-[0.08em] mb-1">
      {text}
    </p>
  );
}

function ArticleCardLarge({ article }) {
  return (
    <Link to="/learn" className="group flex flex-col">
      <div className="rounded-2xl overflow-hidden mb-4 bg-[#EEF0F3] aspect-[16/9]">
        <img
          src={article.img}
          alt={article.alt}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <ArticleTag text={article.tag} />
      <h2 className="text-[20px] font-semibold text-[#0A0B0D] leading-snug group-hover:underline">
        {article.title}
      </h2>
      {article.description && (
        <p className="mt-1.5 text-[14px] text-[#5B616E] leading-relaxed line-clamp-2">
          {article.description}
        </p>
      )}
    </Link>
  );
}

function ArticleCardSmall({ article }) {
  return (
    <Link to="/learn" className="group flex flex-col">
      <div className="rounded-xl overflow-hidden mb-3 bg-[#EEF0F3] aspect-[4/3]">
        <img
          src={article.img}
          alt={article.alt}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <ArticleTag text={article.tag} />
      <h3 className="text-[15px] font-semibold text-[#0A0B0D] leading-snug group-hover:underline line-clamp-2">
        {article.title}
      </h3>
      {article.description && (
        <p className="mt-1 text-[13px] text-[#5B616E] leading-relaxed line-clamp-2">
          {article.description}
        </p>
      )}
    </Link>
  );
}

function Learn() {
  return (
    <div className="bg-white min-h-screen">
      <div className="text-center py-10 md:py-16 px-4 md:px-6">
        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#0A0B0D] leading-tight mb-3">
          Crypto questions, answered
        </h1>
        <p className="text-[15px] md:text-[17px] text-[#5B616E] max-w-[620px] mx-auto leading-relaxed">
          Beginner guides, practical tips, and market updates for first-timers,
          experienced investors, and everyone in between
        </p>
      </div>

      <div className="max-w-[1228px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 md:gap-10 mb-10 md:mb-16">
          <div>
            <h2 className="text-[13px] font-semibold text-[#0A0B0D] uppercase tracking-[0.06em] mb-4">
              Featured
            </h2>
            <ArticleCardLarge article={featured} />
          </div>

          <div>
            <h2 className="text-[13px] font-semibold text-[#0A0B0D] uppercase tracking-[0.06em] mb-4">
              Popular
            </h2>
            <div className="divide-y divide-[rgba(91,97,110,0.15)]">
              {popular.map((item) => (
                <Link
                  key={item.title}
                  to="/learn"
                  className="group flex flex-col py-3.5"
                >
                  <ArticleTag text={item.tag} />
                  <h3 className="text-[15px] font-semibold text-[#0A0B0D] leading-snug group-hover:underline">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-b border-[rgba(91,97,110,0.15)] py-6 mb-8 md:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.href}
                className="flex items-center gap-3 group"
              >
                <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-[14px] font-semibold text-[#0A0B0D] group-hover:underline">
                    {cat.name}
                  </p>
                  <p className="text-[13px] text-[#0052FF] font-medium">
                    See more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <section className="mb-10 md:mb-14">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0A0B0D] mb-2">
            Crypto basics
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#5B616E] mb-6 md:mb-8">
            New to crypto? Not for long — start with these guides and explainers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {cryptoBasicsArticles.map((article) => (
              <ArticleCardLarge key={article.title} article={article} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            {moreBasicsArticles.map((article) => (
              <ArticleCardSmall key={article.title} article={article} />
            ))}
          </div>

          <Link
            to="/learn"
            className="text-[#0052FF] text-[14px] font-semibold hover:underline"
          >
            See more crypto basics →
          </Link>
        </section>

        <hr className="border-[rgba(91,97,110,0.15)] mb-10 md:mb-14" />

        <section className="mb-10 md:mb-14">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0A0B0D] mb-2">
            Tips and tutorials
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#5B616E] mb-6 md:mb-8">
            Step-by-step guides to help you navigate the world of crypto
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            {tutorialsArticles.map((article) => (
              <ArticleCardLarge key={article.title} article={article} />
            ))}
          </div>

          <Link
            to="/learn"
            className="text-[#0052FF] text-[14px] font-semibold hover:underline"
          >
            See more tips and tutorials →
          </Link>
        </section>

        <hr className="border-[rgba(91,97,110,0.15)] mb-10 md:mb-14" />

        <section className="mb-10 md:mb-14">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0A0B0D] mb-2">
            Advanced trading
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#5B616E] mb-6 md:mb-8">
            Take your trading to the next level with these advanced strategies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            {[
              {
                tag: "BEGINNER'S GUIDE",
                title: "What is technical analysis?",
                description:
                  "Learn how traders use charts and technical indicators to make decisions about when to buy and sell crypto.",
                img: "https://images.ctfassets.net/q5ulk4bp65r7/6baYypQ3LKoYOzMQyRQusH/645784649490f41b75dca08f955369fe/futures_anchor.png",
                alt: "Technical analysis",
              },
              {
                tag: "ADVANCED",
                title:
                  "How can I use crypto futures market data for spot trading?",
                description:
                  "Futures data can give you a better sense of where the market is headed and what positions traders are taking.",
                img: "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png",
                alt: "Futures trading",
              },
            ].map((article) => (
              <ArticleCardLarge key={article.title} article={article} />
            ))}
          </div>

          <Link
            to="/learn"
            className="text-[#0052FF] text-[14px] font-semibold hover:underline"
          >
            See more advanced trading →
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Learn;
