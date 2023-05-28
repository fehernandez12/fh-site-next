import { NextApiRequest, NextApiResponse } from "next";

const apiUrl = process.env.API_URL;

const postBySlug = async (_req: NextApiRequest, res: NextApiResponse) => {
  const requestUrl = `${apiUrl}blog/posts/`;
  const { query } = _req;
  const slug = query.slug![0];
  const path = query.slug![1];
  if (path === "related") {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const response = await fetch(`${requestUrl}${slug}/${path}`, {
      headers,
      method: "GET",
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    res.status(200).json(data);
  } else {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const response = await fetch(`${requestUrl}${slug}`, {
      headers,
      method: "GET",
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    res.status(200).json(data);
  }
};

export default postBySlug;
