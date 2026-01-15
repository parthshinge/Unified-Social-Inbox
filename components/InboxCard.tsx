import { MessageCircle, Heart, Repeat, Share } from "lucide-react";

interface InboxCardProps {
    platform: 'farcaster' | 'twitter' | 'lens';
    author: string;
    handle: string;
    content: string;
    time: string;
    status: string;
    avatarColor: string;
}

export function InboxCard({ platform, author, handle, content, time, status, avatarColor }: InboxCardProps) {
    return (
        <div className="glass-card p-4 rounded-xl hover:bg-white/[0.05] transition-all cursor-pointer border border-[var(--border-color)] hover:border-blue-500/30 group">
            <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColor} flex-shrink-0`} />

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-white text-sm">{author}</span>
                            <span className="text-gray-500 text-xs">{handle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${status === 'Following' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                                    status === 'Reply' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' :
                                        'border-gray-700 text-gray-400'
                                }`}>
                                {status}
                            </span>
                            <span className="text-gray-500 text-xs">{time}</span>
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                        {content}
                    </p>

                    <div className="flex items-center gap-4 text-gray-500">
                        <button className="flex items-center gap-1.5 hover:text-blue-400 transition-colors text-xs group/btn">
                            <MessageCircle size={14} />
                            <span>Reply</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-pink-400 transition-colors text-xs">
                            <Heart size={14} />
                            <span>Like</span>
                        </button>
                        <button className="flex items-center gap-1.5 hover:text-green-400 transition-colors text-xs">
                            <Repeat size={14} />
                            <span>Recast</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
