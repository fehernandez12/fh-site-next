import { db } from "@/lib/firebase/firebaseApp";
import {
  where,
  query as fireQuery,
  limit,
  getDocs,
  collection,
  orderBy,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const coll = collection(db, "posts");

const postBySlug = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { query } = _req;
  const slug = query.slug![0];
  const path = query.slug![1];
  const postQ = fireQuery(coll, where("slug", "==", slug), limit(1));
  const snap = await getDocs(postQ);
  if (snap.empty) {
    res.status(404).json({ message: "Post not found" });
    return;
  }
  const post = snap.docs[0].data() as BlogPost;
  if (path === "related") {
    const relatedQ = fireQuery(
      coll,
      where("tags", "array-contains-any", post.tags),
      orderBy("created", "desc"),
      limit(4)
    );
    const relatedSnap = await getDocs(relatedQ);
    const related = relatedSnap.docs.map((doc) => doc.data() as BlogPost);
    res.status(200).json(related);
  } else {
    res.status(200).json(post);
  }
};

export default postBySlug;
