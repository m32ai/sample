import React from 'react';
import RoadmapSection from './RoadmapSection';

const Roadmap: React.FC = () => {
  const liveFeatures = [
    "One-tap Buy/Sell: fire and fill in seconds",
    "Launch Snipe: catch the first block with one click",
    "Charts v1: price, volume, basic overlays",
    "Copy Trade: mirror top-performing wallets",
    "Pending Orders: view, edit, or cancel queued plays",
    "Positions: live entry, size, real-time PnL",
    "PnL Overview: instant profit & loss snapshot on any wallet",
    "Bubble Map: surface bundlers and wallet links",
    "Token Info v1: contract basics + social links",
    "Top Holders: biggest bags at a glance",
    "Top Traders: wallets with highest realized PnL",
    "My Trade History: full personal ledger",
    "Transaction Log: complete on-chain history per token",
    "Wallets: add, import, label, and manage up to 10 wallets",
    "Watchlist: custom radar for tokens you track"
  ];

  const nowFeatures = [
    "Mobile Webapp: trade on the go from any device",
    "Charts v2: on-chart indicators for tracked wallets, dev buy/sell, top traders, and more",
    "Wallet Tracker: follow whale movements and get instant alerts",
    "Tracked Wallet Feed: real-time notifications when your watched wallets make moves"
  ];

  const nextFeatures = [
    "TWAP / DCA: auto ladder buys & sells with smart exit conditions",
    "Wallet Metrics Pop-up: instant alpha insights on any tracked wallet's performance",
    "Enhanced Token Info: safety scores, liquidity locks, dev wallet activity tracking",
    "Custom Dashboard: drag-drop widgets, save personal layouts for maximum efficiency"
  ];

  const laterFeatures = [
    "Banana Battles: competitive trading leagues with live leaderboards and rewards",
    "Trending Tokens: live feed of tokens spiking in volume, price, social buzz, or whale activity",
    "Multichart View: compare multiple tokens or wallets side-by-side for better analysis",
    "Multichain Support: expand trading beyond current chain to capture cross-chain alpha",
    "Twitter Tracker: monitor social sentiment and influencer calls for early alpha signals",
    "AI Alpha Alerts: machine learning powered trade signals based on on-chain patterns",
    "Portfolio Analytics: advanced risk metrics and performance attribution across all positions",
    "Smart Notifications: customizable alerts for price movements, whale activity, and market events"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-banana-black py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-big-shoulders text-5xl font-bold text-banana-yellow mb-3">
            BANANA GUN ROADMAP
          </h1>
          <p className="font-inter text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From alpha to empire: your complete guide to what's shipping, building, planned, and exploring. 
            Built for traders who demand speed, precision, and maximum alpha.
          </p>
        </div>

        {/* Roadmap Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <RoadmapSection stage="LIVE" features={liveFeatures} />
          <RoadmapSection stage="NOW" features={nowFeatures} />
          <RoadmapSection stage="NEXT" features={nextFeatures} />
          <RoadmapSection stage="LATER" features={laterFeatures} />
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="font-inter text-gray-400 text-sm">
            Built for traders, by traders. Maximum alpha, minimum fluff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
