"use client";

import { Search, Bell, Settings, ChevronDown } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 border-b border-[var(--border-color)] bg-[var(--background)] flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Farcaster Inquiry..."
                        className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <span>By Channels</span>
                    <div className="w-10 h-6 bg-blue-600/20 border border-blue-600/50 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 h-4 w-4 bg-blue-500 rounded-full shadow-lg"></div>
                    </div>
                </div>

                <div className="h-8 w-[1px] bg-[var(--border-color)]"></div>

                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <Bell size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <Settings size={20} />
                    </button>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="text-right hidden sm:block">
                            <div className="text-sm font-medium text-white">Parth Shinge</div>
                            <div className="text-xs text-blue-500">Admin</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 border-2 border-[var(--background)] shadow-lg" />
                        <ChevronDown size={14} className="text-gray-500" />
                    </div>
                </div>
            </div>
        </header>
    );
}
