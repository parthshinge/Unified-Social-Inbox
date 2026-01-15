export interface Cast {
    hash: string;
    author: {
        username: string;
        display_name: string;
        pfp_url: string;
    };
    text: string;
    timestamp: string;
    platform: 'farcaster' | 'twitter' | 'lens';
    type: 'Following' | 'Reply' | 'Mention';
}

export interface Metric {
    label: string;
    value: string;
    trend: string;
    isPositive: boolean;
}
