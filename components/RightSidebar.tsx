"use client";

import { MoreHorizontal } from "lucide-react";

const clientAccounts = [
    { name: "Design Team", category: "Internal", followers: "12K", color: "from-pink-500 to-rose-500" },
    { name: "Marketing", category: "Campaign", followers: "8.5K", color: "from-blue-500 to-cyan-500" },
    { name: "Development", category: "Product", followers: "24K", color: "from-purple-500 to-indigo-500" },
    { name: "Support", category: "Service", followers: "5K", color: "from-emerald-500 to-teal-500" },
];

export function RightSidebar() {
    return (
        <div className="w-[300px] border-l border-[var(--border-color)] bg-[var(--background)] h-screen fixed right-0 top-0 pt-16 hidden xl:flex flex-col">
            <div className="p-6 overflow-y-auto flex-1">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-white">Client accounts</h3>
                    <button className="text-xs text-blue-500 hover:text-blue-400">View all</button>
                </div>

                <div className="space-y-4">
                    {clientAccounts.map((account) => (
                        <div key={account.name} className="glass-card p-3 rounded-xl flex items-center gap-3 hover:bg-white/[0.05] transition-colors cursor-pointer ring-1 ring-white/5 hover:ring-blue-500/30">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${account.color} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                                {account.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-white truncate">{account.name}</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 truncate">{account.category}</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                    <span className="text-xs text-gray-400">{account.followers}</span>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-white">
                                <MoreHorizontal size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h3 className="font-semibold text-white mb-4">Recent scored Idea</h3>
                    <div className="glass-card p-4 rounded-xl border-l-4 border-l-purple-500">
                        <div className="text-xs text-purple-400 font-medium mb-1">High Impact</div>
                        <div className="text-sm text-gray-300 leading-relaxed">
                            "Launch a community-driven campaign for the new feature release focusing on user stories."
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                            <div className="text-xs text-gray-500">2 hours ago</div>
                            <div className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Score: 92</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
