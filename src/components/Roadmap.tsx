import React from 'react';
import RoadmapSection from './RoadmapSection';
import { 
  Zap, Target, BarChart3, Copy, Clock, DollarSign, Eye, Network, 
  Info, Users, TrendingUp, History, BookOpen, Wallet, Star,
  Smartphone, Activity, Bell, Calculator, LineChart,
  Shield, Layout, Trophy, Flame, BarChart, Globe, Twitter,
  Brain, PieChart, Settings
} from 'lucide-react';

const Roadmap: React.FC = () => {
  const liveFeatures = [
    { text: "One-tap Buy/Sell: fire and fill in seconds", icon: Zap },
    { text: "Launch Snipe: catch the first block with one click", icon: Target },
    { text: "Charts v1: price, volume, basic overlays", icon: BarChart3 },
    { text: "Copy Trade: mirror top-performing wallets", icon: Copy },
    { text: "Pending Orders: view, edit, or cancel queued plays", icon: Clock },
    { text: "Positions: live entry, size, real-time PnL", icon: DollarSign },
    { text: "PnL Overview: instant profit & loss snapshot on any wallet", icon: Eye },
    { text: "Bubble Map: surface bundlers and wallet links", icon: Network },
    { text: "Token Info v1: contract basics + social links", icon: Info },
    { text: "Top Holders: biggest bags at a glance", icon: Users },
    { text: "Top Traders: wallets with highest realized PnL", icon: TrendingUp },
    { text: "My Trade History: full personal ledger", icon: History },
    { text: "Transaction Log: complete on-chain history per token", icon: BookOpen },
    { text: "Wallets: add, import, label, and manage up to 10 wallets", icon: Wallet },
    { text: "Watchlist: custom radar for tokens you track", icon: Star }
  ];

  const nowFeatures = [
    { text: "Mobile Webapp: trade on the go from any device", icon: Smartphone },
    { text: "Charts v2: on-chart indicators for tracked wallets, dev buy/sell, top traders, and more", icon: Activity },
    { text: "Wallet Tracker: follow whale movements and get instant alerts", icon: Bell },
    { text: "Tracked Wallet Feed: real-time notifications when your watched wallets make moves", icon: Bell }
  ];

  const nextFeatures = [
    { text: "TWAP / DCA: auto ladder buys & sells with smart exit conditions", icon: Calculator },
    { text: "Wallet Metrics Pop-up: instant alpha insights on any tracked wallet's performance", icon: LineChart },
    { text: "Enhanced Token Info: safety scores, liquidity locks, dev wallet activity tracking", icon: Shield },
    { text: "Custom Dashboard: drag-drop widgets, save personal layouts for maximum efficiency", icon: Layout }
  ];

  const laterFeatures = [
    { text: "Banana Battles: competitive trading leagues with live leaderboards and rewards", icon: Trophy },
    { text: "Trending Tokens: live feed of tokens spiking in volume, price, social buzz, or whale activity", icon: Flame },
    { text: "Multichart View: compare multiple tokens or wallets side-by-side for better analysis", icon: BarChart },
    { text: "Multichain Support: expand trading beyond current chain to capture cross-chain alpha", icon: Globe },
    { text: "Twitter Tracker: monitor social sentiment and influencer calls for early alpha signals", icon: Twitter },
    { text: "AI Alpha Alerts: machine learning powered trade signals based on on-chain patterns", icon: Brain },
    { text: "Portfolio Analytics: advanced risk metrics and performance attribution across all positions", icon: PieChart },
    { text: "Smart Notifications: customizable alerts for price movements, whale activity, and market events", icon: Settings }
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
