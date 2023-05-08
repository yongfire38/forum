import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function deletePostApi(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    try {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
      res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
