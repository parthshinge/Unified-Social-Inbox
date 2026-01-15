import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricCardProps {
    label: string;
    value: string;
    trend?: string;
    isPositive?: boolean;
}

export function MetricCard({ label, value, trend, isPositive = true }: MetricCardProps) {
    return (
        <div className="glass-card p-4 rounded-xl flex flex-col gap-1 hover:bg-white/[0.05] transition-colors cursor-pointer group">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">{label}</span>
            <div className="flex items-end justify-between">
                <span className="text-xl font-bold text-white tracking-tight">{value}</span>
                {trend && (
                    <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        <span>{trend}</span>
                    </div>
                )}
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-2/3 group-hover:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
}
