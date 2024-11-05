import { db } from "@/lib/firebase/firebaseApp";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const coll = collection(db, "posts");

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  let data: TBlogPost[];
  try {
    const q = query(coll, orderBy("created", "desc"), limit(12));
    const snap = await getDocs(q);
    data = snap.docs.map((doc) => doc.data() as BlogPost);
  } catch (error) {
    res.status(500).json(error);
    return;
  }
  res.status(200).json(data);
};

export default handler;
