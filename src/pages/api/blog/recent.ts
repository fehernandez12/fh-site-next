import { NextApiRequest, NextApiResponse } from "next";

const apiUrl = process.env.API_URL;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const requestUrl = `${apiUrl}blog/posts/recent/`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(requestUrl, {
    headers,
    method: "GET",
  });
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  res.status(200).json(data);
};

export default handler;
