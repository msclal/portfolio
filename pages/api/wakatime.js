import { WakaTime } from "wakatime";

export default async function handler(req, res) {
  const wakaTimeInstance = new WakaTime(
    "waka_928e55e2-2c32-4538-8e3c-4837e6a36506"
  );

  try {
    const response = await wakaTimeInstance
      .stats("last_30_days")
      .then()
      .catch();

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching Wakatime data:", error);
    res.status(500).json({ error: "Failed to fetch Wakatime data" });
  }
}
