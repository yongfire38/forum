import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function addPostEditApi(req, res) {
  if (req.body.title === "" || req.body.content === "") {
    return res.status(500).json("제목이랑 내용 채워서 버튼 누르세요");
  }

  let db = (await connectDB).db("forum");
  let editPost = { title : req.body.title, content: req.body.content }

  try {
    switch (req.method) {
      case "POST":
        await db.collection("post").updateOne({_id : new ObjectId(req.body._id)}, { $set: editPost });
        res.redirect(302, '/list');
        break;
      default:
        const allPosts = await db.collection("post").find().toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  } catch (error) {
    return res.status(400).json("에러남요");
  }
}