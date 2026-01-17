"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Inbox,
  Users,
  FileText,
  BarChart2,
  Briefcase,
  FilePieChart,
  Zap,
  Dumbbell,
  Home,
  MessageSquare,
  Globe,
  Layout
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Unified Inbox", icon: Inbox, href: "/", count: 12 },
  { name: "Clients", icon: Users, href: "/clients" },
  { name: "Client Templates", icon: FileText, href: "/templates" },
  { name: "Onchain Metrics", icon: BarChart2, href: "/metrics" },
  { name: "Client Accounts", icon: Briefcase, href: "/accounts" },
  { name: "Reporting Planning", icon: FilePieChart, href: "/reporting" },
  { name: "Clienceles", icon: Zap, href: "/clienceles", count: 3 },
  { name: "Exercises", icon: Dumbbell, href: "/exercises" },
  { name: "Home", icon: Home, href: "/home" },
];

const socialAccounts = [
  { name: "CoinbaseApp", icon: Globe },
  { name: "basebuilding", icon: Layout },
  { name: "BasedUX", icon: MessageSquare },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-sidebar h-screen border-r border-border-custom bg-background flex flex-col fixed left-0 top-0 z-50">
      <div className="h-16 flex items-center px-6 border-b border-border-custom">
        <div className="font-bold text-lg tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">ST</span>
          <span>Social Meok</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
        <div>
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-600/10 text-blue-500"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  {item.count && (
                    <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Social Accounts
          </h3>
          <div className="space-y-1">
            {socialAccounts.map((item) => (
              <button
                key={item.name}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <div className="w-5 h-5 rounded bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] text-white">
                  {item.name[0]}
                </div>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border-custom">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 shadow-lg" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Guest User</span>
            <span className="text-xs text-gray-500">View Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
