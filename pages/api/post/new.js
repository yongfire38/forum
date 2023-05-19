import { connectDB } from "@/app/util/database";
import {getServerSession} from 'next-auth'
import {authOptions} from '@/pages/api/auth/[...nextauth]'

export default async function addPostApi(req, res) {
  if (req.body.title === "" || req.body.content === "") {
    return res.status(500).json("제목이랑 내용 채워서 버튼 누르세요");
  }

  let db = (await connectDB).db("forum");
  let session = await getServerSession(req, res, authOptions);

  if(session) {
    req.body.author = session.user.email;
  }

  try {
    switch (req.method) {
      case "POST":
        await db.collection("post").insertOne(req.body);
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
