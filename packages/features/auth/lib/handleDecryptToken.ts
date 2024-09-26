import { NextApiRequest, NextApiResponse } from "next";

export function handleDecryptToken(
  getIdTokenClaims: (req: NextApiRequest) => Promise<any>
) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const payload = await getIdTokenClaims(req);
      if (!payload) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      res.status(200).json(payload);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
