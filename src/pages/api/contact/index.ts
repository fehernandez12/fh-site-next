import { NextApiRequest, NextApiResponse } from "next";

const apiUrl = process.env.API_URL;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const requestUrl = `${apiUrl}blog/contact/`;
  const headers = new Headers();
  const body = JSON.stringify(_req.body);
  headers.append("Content-Type", "application/json");
  const response = await fetch(requestUrl, {
    headers,
    body,
    method: "POST",
  });
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  res.status(200).json(data);
};

export default handler;
