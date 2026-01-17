import { Header } from "@/components/Header";
import { MoreHorizontal, Users, BarChart2 } from "lucide-react";

export default function AccountsPage() {
    const clientAccounts = [
        { name: "Design Team", category: "Internal", followers: "12K", color: "from-pink-500 to-rose-500", description: "Internal design resources and assets management." },
        { name: "Marketing", category: "Campaign", followers: "8.5K", color: "from-blue-500 to-cyan-500", description: "Social media campaigns and outreach programs." },
        { name: "Development", category: "Product", followers: "24K", color: "from-purple-500 to-indigo-500", description: "Core product development and engineering updates." },
        { name: "Support", category: "Service", followers: "5K", color: "from-emerald-500 to-teal-500", description: "Customer success and incident support channels." },
    ];

    return (
        <>
            <Header />
            <div className="p-6 space-y-6 max-w-[1600px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">Client Accounts</h1>
                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-500 transition-colors">
                        Add New Account
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientAccounts.map((account) => (
                        <div key={account.name} className="glass-card p-6 rounded-xl space-y-4 hover:border-blue-500/50 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                    {account.name[0]}
                                </div>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{account.name}</h3>
                                <p className="text-sm text-gray-400">{account.category}</p>
                            </div>

                            <p className="text-sm text-gray-400 line-clamp-2">
                                {account.description}
                            </p>

                            <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Users size={16} />
                                    <span>{account.followers}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <BarChart2 size={16} />
                                    <span className="text-emerald-400">+2.4%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
