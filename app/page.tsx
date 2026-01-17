import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { InboxCard } from "@/components/InboxCard";
import { Filter, SlidersHorizontal, BarChart } from "lucide-react";
import { fetchInboxData, fetchMetrics } from "@/lib/data";
import { formatDistanceToNow } from "date-fns";

export default async function Home() {
  const metrics = await fetchMetrics();
  const inboxItems = await fetchInboxData();

  // Helper to format time using date-fns
  const formatTime = (isoString: string) => {
    try {
      return formatDistanceToNow(new Date(isoString), { addSuffix: true });
    } catch (e) {
      return "recently";
    }
  };

  // Helper for random gradient assignment if not provided
  const getGradient = (username: string) => {
    const gradients = [
      "from-blue-400 to-indigo-500",
      "from-green-400 to-emerald-500",
      "from-orange-400 to-red-500",
      "from-purple-400 to-pink-500",
      "from-cyan-400 to-blue-500"
    ];
    return gradients[username.length % gradients.length];
  };

  return (
    <>
      <Header />
      <div className="p-6 space-y-8 max-w-[1600px]">
        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
              Details
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-white/5 text-gray-300 text-sm font-medium transition-colors border border-border-custom">
              <Filter size={16} />
              Assign Interests
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-white/5 text-gray-300 text-sm font-medium transition-colors border border-border-custom">
              <BarChart size={16} />
              Analytics Basics
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-white/5 text-gray-300 text-sm font-medium transition-colors border border-border-custom">
              <SlidersHorizontal size={16} />
              Campaigns
            </button>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white px-1">Unified Inbox <span className="text-xs text-gray-500 font-normal ml-2">(Real-time Farcaster Feed)</span></h2>
            <div className="grid gap-3">
              {inboxItems.map((item, i) => (
                <InboxCard
                  key={item.hash || i}
                  platform={item.platform}
                  author={item.author.display_name}
                  handle={`@${item.author.username}`}
                  content={item.text}
                  time={formatTime(item.timestamp)}
                  status={item.type}
                  avatarColor={getGradient(item.author.username)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
