import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // For testing, just return a fake URL
  return res.status(200).json({ url: "/uploads/fake-image.png" });
}
