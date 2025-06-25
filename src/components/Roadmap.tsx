import React from 'react';
import RoadmapSection from './RoadmapSection';
import { 
  Zap, Target, BarChart3, Copy, Clock, DollarSign, Eye, Network, 
  Info, Users, TrendingUp, History, BookOpen, Wallet, Star,
  Smartphone, Activity, Bell, Calculator, LineChart,
  Shield, Layout, Trophy, Flame, BarChart, Globe, Twitter,
  Brain, PieChart, Settings, Tags, Filter, AlertCircle
} from 'lucide-react';

const Roadmap: React.FC = () => {
  const liveFeatures = [
    { text: "One-tap Buy/Sell: fire and fill in seconds", icon: Zap },
    { text: "Launch Snipe: catch first block with one click", icon: Target },
    { text: "Charts v1: price, volume, basic overlays", icon: BarChart3 },
    { text: "Copy Trade: mirror top wallets", icon: Copy },
    { text: "Pending Orders: view, edit, cancel queued trades", icon: Clock },
    { text: "Positions: live entry, size, real-time PnL", icon: DollarSign },
    { text: "PnL Overview: instant profit & loss on any wallet", icon: Eye },
    { text: "Bubble Map: surface bundlers and wallet links", icon: Network },
    { text: "Token Info v1: price, cap, liquidity, holders, age, supply, personal PnL", icon: Info },
    { text: "Top Holders: biggest bags at a glance", icon: Users },
    { text: "Top Traders: wallets with highest realized PnL", icon: TrendingUp },
    { text: "My Trade History: full personal ledger", icon: History },
    { text: "Transaction Log: complete on-chain history per token", icon: BookOpen },
    { text: "Wallets: add, import, label, manage up to 10 wallets", icon: Wallet },
    { text: "Watchlist: custom radar for tracked tokens", icon: Star }
  ];

  const nowFeatures = [
    { text: "Charts v2: advanced charting with dev indicators, trader analysis, enhanced overlays", icon: Activity },
    { text: "Custom Dashboard: drag-drop widgets, save layouts for max efficiency", icon: Layout },
    { text: "Wallet Tracker: add wallets with custom labels, icons, nicknames", icon: Tags },
    { text: "Wallet Activity Feed: real-time feed with bell notifications and controls", icon: Filter }
  ];

  const nextFeatures = [
    { text: "On-Chart Wallet Indicators: visual markers showing tracked wallet activity", icon: LineChart },
    { text: "Wallet Label Metrics: hover for buy/sell metrics and notification toggles", icon: AlertCircle },
    { text: "Mobile Webapp: trade on the go from any device", icon: Smartphone },
    { text: "TWAP / DCA: auto ladder buys & sells with smart exits", icon: Calculator },
    { text: "Enhanced Token Info: safety scores, liquidity locks, dev tracking", icon: Shield },
    { text: "Trending Tokens: live feed of volume, price, social, whale activity spikes", icon: Flame }
  ];

  const laterFeatures = [
    { text: "Banana Battles: competitive trading leagues with leaderboards and rewards", icon: Trophy },
    { text: "Multichart View: compare multiple tokens or wallets side-by-side", icon: BarChart },
    { text: "Multichain Support: expand beyond current chain for cross-chain alpha", icon: Globe },
    { text: "Twitter Tracker: monitor sentiment and influencer calls for early alpha", icon: Twitter }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-banana-black py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-big-shoulders text-6xl font-bold text-banana-yellow mb-3">
            BANANA PRO ROADMAP
          </h1>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
          <p className="font-inter text-gray-400 text-base">
            Built for traders, by traders. Maximum alpha, minimum fluff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
