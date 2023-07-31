import { WakaTime } from "wakatime";

export default async function handler(req, res) {
  const wakaTimeInstance = new WakaTime(
    "waka_9c6d9ee6-27e4-4776-b696-ec1bfabc71b0"
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
