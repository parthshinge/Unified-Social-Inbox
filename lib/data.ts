import { Cast, Metric } from "./types";
import { MOCK_CASTS, MOCK_METRICS } from "./mock-data";

export async function fetchInboxData(): Promise<Cast[]> {
    const apiKey = process.env.NEYNAR_API_KEY;

    if (apiKey) {
        // 1. Priority: Neynar API (Best Experience)
        try {
            const response = await fetch(
                "https://api.neynar.com/v2/farcaster/feed/trending?limit=10",
                {
                    headers: {
                        accept: "application/json",
                        "x-api-key": apiKey,
                    },
                    next: { revalidate: 60 },
                }
            );

            if (response.ok) {
                const data = await response.json();
                return data.casts.map((cast: any) => ({
                    hash: cast.hash,
                    author: {
                        username: cast.author.username,
                        display_name: cast.author.display_name,
                        pfp_url: cast.author.pfp_url,
                    },
                    text: cast.text,
                    timestamp: cast.timestamp,
                    platform: "farcaster",
                    type: "Following",
                }));
            }
        } catch (error) {
            console.error("Neynar API failed, trying public fallback...", error);
        }
    }

    // 2. Fallback: Public Farcaster Hub (NodeRPC) - No API Key Needed
    // We fetch casts for a specific FID (e.g., Vitalik: 5650, or default to a high-activity user)
    // Since "trending" isn't a simple endpoint on Hubs, we fetch recent casts from a known active user.
    try {
        const HUB_URL = "https://hub.pinata.cloud/v1/castsByFid?fid=5650&pageSize=10&reverse=true"; // Vitalik's FID
        const response = await fetch(HUB_URL, { next: { revalidate: 60 } });

        if (response.ok) {
            const data = await response.json();
            return data.messages.map((msg: any) => {
                const body = msg.data.castAddBody;
                return {
                    hash: msg.hash,
                    author: {
                        username: "vitalik.eth", // Hardcoded for this endpoint as Hubs don't return profile data inline
                        display_name: "Vitalik Buterin",
                        pfp_url: "https://i.imgur.com/3_p0fW5.png", // Generic Vitalik PFP
                    },
                    text: body.text,
                    timestamp: new Date(msg.data.timestamp * 1000 + 1609459200000).toISOString(), // Farcaster Epoch (Jan 1, 2021)
                    platform: "farcaster",
                    type: "Following",
                };
            });
        }
    } catch (error) {
        console.warn("Public Hub API failed, reverting to mock data.", error);
    }

    return MOCK_CASTS;
}

export async function fetchMetrics(): Promise<Metric[]> {
    try {
        // Real Chain Data: Fetch Ethereum Price from CoinGecko
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true",
            { next: { revalidate: 60 } }
        );

        if (response.ok) {
            const data = await response.json();
            const eth = data.ethereum;

            const priceFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(eth.usd);
            const change = eth.usd_24h_change.toFixed(2) + "%";
            const isPositive = eth.usd_24h_change >= 0;

            // Merge real crypto data with our other metrics
            return [
                { label: "Avg Ratings", value: "7.0", trend: "+4%", isPositive: true },
                { label: "Delivery", value: "81", trend: "+7%", isPositive: true },
                { label: "ETH Price", value: priceFormatted, trend: change, isPositive }, // Real Data
                { label: "Clients", value: "2,696", trend: "+5%", isPositive: true },
                { label: "Followers", value: "45,304", trend: "+12%", isPositive: true },
            ];
        }
    } catch (error) {
        console.error("Failed to fetch chain metrics", error);
    }

    return MOCK_METRICS;
}
