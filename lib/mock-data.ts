import { Cast, Metric } from "./types";

export const MOCK_METRICS: Metric[] = [
    { label: "Avg Ratings", value: "7.0", trend: "+4%", isPositive: true },
    { label: "Delivery", value: "81", trend: "+7%", isPositive: true },
    { label: "Avg Price", value: "3,674", trend: "-2%", isPositive: false },
    { label: "Clients", value: "2,696", trend: "+5%", isPositive: true },
    { label: "Followers", value: "45,304", trend: "+12%", isPositive: true },
];

export const MOCK_CASTS: Cast[] = [
    {
        hash: "mock1",
        author: {
            username: "community",
            display_name: "Community 1",
            pfp_url: "https://ui-avatars.com/api/?name=Community+1&background=random"
        },
        text: "Hey, are you interested in a collaboration? We have some new ideas for the upcoming season.",
        timestamp: "2024-03-20T10:00:00Z",
        platform: "farcaster",
        type: "Following"
    },
    {
        hash: "mock2",
        author: {
            username: "designhub",
            display_name: "Design Hub",
            pfp_url: "https://ui-avatars.com/api/?name=Design+Hub&background=random"
        },
        text: "Just released a new case study on user retention. Check it out and let us know what you think!",
        timestamp: "2024-03-20T08:00:00Z",
        platform: "lens",
        type: "Reply"
    },
    {
        hash: "mock3",
        author: {
            username: "arivers",
            display_name: "Alex Rivers",
            pfp_url: "https://ui-avatars.com/api/?name=Alex+Rivers&background=random"
        },
        text: "Does anyone have experience with the new Farcaster Frames? I'm trying to build a poll frame.",
        timestamp: "2024-03-20T07:00:00Z",
        platform: "twitter",
        type: "Following"
    },
    {
        hash: "mock4",
        author: {
            username: "sarahc",
            display_name: "Sarah Chen",
            pfp_url: "https://ui-avatars.com/api/?name=Sarah+Chen&background=random"
        },
        text: "The new analytics dashboard looks amazing! Great work team 🚀",
        timestamp: "2024-03-20T06:00:00Z",
        platform: "farcaster",
        type: "Following"
    },
    {
        hash: "mock5",
        author: {
            username: "cryptonews",
            display_name: "Crypto News",
            pfp_url: "https://ui-avatars.com/api/?name=Crypto+News&background=random"
        },
        text: "Market analysis for the week: Bitcoin showing strong support at $65k level.",
        timestamp: "2024-03-20T04:00:00Z",
        platform: "twitter",
        type: "Reply"
    }
];
