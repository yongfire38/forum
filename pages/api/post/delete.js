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


    // 글 작성자랑 이메일이 같거나, admin일 경우만 삭제 처리
    if( (session !== null && post?.author === session?.user.email && session?.user.role === "user") || (session !== null && session?.user.role === "admin")) {
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
      return res.status(500).json("삭제 권한 없음");
    }
  }
}
