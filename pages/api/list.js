import { connectDB } from "@/app/util/database";

export default async function listApi(req, res) {
  let db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();

  res.status(200).json(results);
}
