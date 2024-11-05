import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/firebase/firebaseApp";
import {
  addDoc,
  collection,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";

const coll = collection(db, "contacts");

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  let doc: DocumentSnapshot;
  try {
    const ref = await addDoc(coll, _req.body);
    doc = await getDoc(ref);
    console.log("Document written: ", doc.data());
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
  res.status(201).json(doc.data() as Contact);
};

export default handler;
