import { NextApiRequest, NextApiResponse } from "next";

const apiUrl = process.env.API_URL;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  let result: TFeatured = {
    recent: [],
    popular: [],
  };
  let requestUrl = `${apiUrl}blog/posts/recent`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  let response = await fetch(requestUrl, {
    headers,
    method: "GET",
  });
  if (!response.ok) throw new Error(response.statusText);
  let data = await response.json();
  result.recent = data;
  requestUrl = `${apiUrl}blog/posts/popular`;
  response = await fetch(requestUrl, {
    headers,
    method: "GET",
  });
  if (!response.ok) throw new Error(response.statusText);
  data = await response.json();
  result.popular = data;
  res.status(200).json(result);
};

export default handler;
