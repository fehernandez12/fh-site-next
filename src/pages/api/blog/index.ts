import { db } from "@/lib/firebase/firebaseApp";
import {
  collection,
  query as fireQuery,
  orderBy,
  limit,
  getDocs,
  where,
  and,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const coll = collection(db, "posts");

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { query } = _req;
  const search = query.search ? (query.search as string) : null;
  const tag = query.tag ? (query.tag as string) : null;
  let data: BlogPost[];
  try {
    if (search && !tag) {
      const q = fireQuery(coll, orderBy("created", "desc"));
      const snap = await getDocs(q);
      data = snap.docs
        .map((doc) => doc.data() as BlogPost)
        .filter((post) => {
          return post.title.toLowerCase().includes(search.toLowerCase());
        });
    } else if (tag && !search) {
      const q = fireQuery(
        coll,
        orderBy("created", "desc"),
        where("tags", "array-contains", tag)
      );
      const snap = await getDocs(q);
      data = snap.docs.map((doc) => doc.data() as BlogPost);
    } else {
      const q = fireQuery(coll, orderBy("created", "desc"));
      const snap = await getDocs(q);
      data = snap.docs.map((doc) => doc.data() as BlogPost);
    }
  } catch (error) {
    res.status(500).json(error);
    return;
  }
  res.status(200).json(data);
};

export default handler;
