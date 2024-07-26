// pages/api/me.js
import fetcher from "../../utils/fetcher";

export default async function handler(req, res) {
  try {
    const data = await fetcher(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
      req.headers
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
