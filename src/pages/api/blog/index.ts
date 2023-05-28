import { NextApiRequest, NextApiResponse } from "next";

const apiUrl = process.env.API_URL;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  let requestUrl;
  const { query } = _req;
  const search = query.search ? (query.search as string) : null;
  const tag = query.tag ? (query.tag as string) : null;
  if (search && !tag) {
    requestUrl = `${apiUrl}blog/posts?q=${search.replace(/ /g, "+")}`;
  } else if (tag && !search) {
    requestUrl = `${apiUrl}blog/posts?tag=${tag}`;
  } else {
    requestUrl = `${apiUrl}blog/posts/`;
  }
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
