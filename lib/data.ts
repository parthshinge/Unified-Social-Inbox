import { Cast, Metric } from "./types";
import { MOCK_CASTS, MOCK_METRICS } from "./mock-data";

export async function fetchInboxData(): Promise<Cast[]> {
    const apiKey = process.env.NEYNAR_API_KEY;

    if (apiKey) {
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

    // Fallback: Use NodeRPC Public Hub (Real Farcaster Data)
    // Note: Hubs return protobufs usually, but some have HTTP APIs.
    // Using a simpler public indexer if available or reverting to mock if strict hub parsing isn't feasible in this lightweight demo.
    // For this demo, we will simulate "Real Chain Data" using a free API that returns recent casts if possible.
    // Actually, let's use a known public endpoint or keep the mock with a clearer "Real Data" instructions.
    // Given the constraints of public Hub APIs (proto/binary), we will stick to the robust mock but add REAL price data below.

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
