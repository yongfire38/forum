import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function deletePostApi(req, res) {
  if (req.method == "POST") {
    let db = (await connectDB).db("forum");
    let session = await getServerSession(req, res, authOptions);
    let post = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

      // console.log("1111111"+session);
      // console.log("222222"+post?.author);
      // console.log("333333"+session?.user.email);

    if(session !== null || post?.author === session?.user.email) {
      try {
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(req.body) });
        console.log(result);
        res.redirect(302, "/list");
      } catch (error) {
        console.log(error);
      }
    } else {
      return res.status(500).json("현재유저와 작성자 불일치");
    }
  }
}
