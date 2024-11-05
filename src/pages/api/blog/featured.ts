import { db } from "@/lib/firebase/firebaseApp";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const coll = collection(db, "posts");

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  let result: TFeatured = {
    recent: [],
    popular: [],
  };
  try {
    const recentQ = query(coll, orderBy("created", "desc"), limit(12));
    const recentSnap = await getDocs(recentQ);
    result.recent = recentSnap.docs.map((doc) => doc.data() as BlogPost);
    const popularQ = query(coll, orderBy("views", "desc"), limit(12));
    const popularSnap = await getDocs(popularQ);
    result.popular = popularSnap.docs.map((doc) => doc.data() as BlogPost);
  } catch (error) {
    res.status(500).json(error);
    return;
  }
  res.status(200).json(result);
};

export default handler;
