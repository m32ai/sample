
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
    { name: "One-tap Buy/Sell", text: "fire and fill in seconds", icon: Zap },
    { name: "Auto Sniping", text: "catch first block with one click", icon: Target },
    { name: "Charts v1", text: "price, volume, basic overlays", icon: BarChart3 },
    { name: "Copy Trade", text: "mirror top wallets", icon: Copy },
    { name: "Pending Orders", text: "view, edit, cancel queued trades", icon: Clock },
    { name: "Positions", text: "live entry, size, real-time PnL", icon: DollarSign },
    { name: "PnL Overview", text: "instant profit & loss on any wallet", icon: Eye },
    { name: "Bubble Map", text: "surface bundlers and wallet links", icon: Network },
    { name: "Token Info v1", text: "price, cap, liquidity, holders, age, supply, personal PnL", icon: Info },
    { name: "Top Holders", text: "biggest bags at a glance", icon: Users },
    { name: "Top Traders", text: "wallets with highest realized PnL", icon: TrendingUp },
    { name: "My Trade History", text: "full personal ledger", icon: History },
    { name: "Transaction Log", text: "complete on-chain history per token", icon: BookOpen },
    { name: "Wallets", text: "add, import, label, manage up to 10 wallets", icon: Wallet },
    { name: "Watchlist", text: "custom radar for tracked tokens", icon: Star }
  ];

  const nowFeatures = [
    { name: "Charts v2", text: "advanced charting with dev indicators, trader analysis, enhanced overlays", icon: Activity },
    { name: "Custom Dashboard", text: "drag-drop widgets, save layouts for max efficiency", icon: Layout },
    { name: "Wallet Tracker", text: "add wallets with custom labels, icons, nicknames", icon: Tags },
    { name: "Wallet Activity Feed", text: "real-time feed with bell notifications and controls", icon: Filter }
  ];

  const nextFeatures = [
    { name: "On-Chart Wallet Indicators", text: "visual markers showing tracked wallet activity", icon: LineChart },
    { name: "Wallet Label Metrics", text: "hover for buy/sell metrics and notification toggles", icon: AlertCircle },
    { name: "Mobile Webapp", text: "trade on the go from any device", icon: Smartphone },
    { name: "TWAP / DCA", text: "auto ladder buys & sells with smart exits", icon: Calculator },
    { name: "Enhanced Token Info", text: "safety scores, liquidity locks, dev tracking", icon: Shield },
    { name: "Trending Tokens", text: "live feed of volume, price, social, whale activity spikes", icon: Flame }
  ];

  const laterFeatures = [
    { name: "Banana Battles", text: "competitive trading leagues with leaderboards and rewards", icon: Trophy },
    { name: "Multichart View", text: "compare multiple tokens or wallets side-by-side", icon: BarChart },
    { name: "Multichain Support", text: "expand beyond current chain for cross-chain alpha", icon: Globe },
    { name: "Twitter Tracker", text: "monitor sentiment and influencer calls for early alpha", icon: Twitter }
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
            Your complete guide to what's shipping, building, and planned. Built for traders who demand speed, precision, and maximum alpha.
          </p>
        </div>

        {/* Live Features Section */}
        <div className="mb-12">
          <h2 className="font-big-shoulders text-4xl font-bold text-banana-yellow mb-6 text-center">
            LIVE FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveFeatures.map((feature, index) => (
              <div key={index} className="bg-banana-black rounded-lg shadow-md overflow-hidden h-full border-l-4 border-banana-yellow">
                <div className="p-4 flex items-start gap-3">
                  <feature.icon className="w-6 h-6 text-banana-yellow flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-big-shoulders text-banana-yellow text-xl font-bold mb-2 leading-snug tracking-wide">
                      {feature.name}
                    </h3>
                    <p className="font-inter text-white text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Section */}
        <div>
          <h2 className="font-big-shoulders text-4xl font-bold text-banana-yellow mb-6 text-center">
            BANANA PRO ROADMAP
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RoadmapSection stage="NOW" features={nowFeatures} />
            <RoadmapSection stage="NEXT" features={nextFeatures} />
            <RoadmapSection stage="LATER" features={laterFeatures} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
