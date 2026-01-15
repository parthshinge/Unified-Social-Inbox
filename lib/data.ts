import { Cast, Metric } from "./types";
import { MOCK_CASTS, MOCK_METRICS } from "./mock-data";

export async function fetchInboxData(): Promise<Cast[]> {
    const apiKey = process.env.NEYNAR_API_KEY;

    if (!apiKey) {
        console.warn("Using mock data. Add NEYNAR_API_KEY to .env for real data.");
        return MOCK_CASTS;
    }

    try {
        const response = await fetch(
            "https://api.neynar.com/v2/farcaster/feed/trending?limit=10",
            {
                headers: {
                    accept: "application/json",
                    "x-api-key": apiKey,
                },
                next: { revalidate: 60 }, // Cache for 60 seconds
            }
        );

        if (!response.ok) {
            throw new Error(`Neynar API Error: ${response.statusText}`);
        }

        const data = await response.json();

        // Transform Neynar data to our Cast interface
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
            type: "Following", // Default to Following for trending feed
        }));

    } catch (error) {
        console.error("Failed to fetch real data:", error);
        return MOCK_CASTS;
    }
}

export function fetchMetrics(): Metric[] {
    // In a real app, this would fetch from an analytics API
    return MOCK_METRICS;
}
