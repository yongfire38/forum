import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import {getServerSession} from 'next-auth'
import {authOptions} from '@/pages/api/auth/[...nextauth]'

export default async function addCommentApi(req, res) {
    if(req.method == 'POST'){

        req.body = JSON.parse(req.body);

        let session = await getServerSession(req, res, authOptions);

        if (req.body.comment === "") {
            return res.status(500).json("댓글 내용 채우세요");
          } else if (session == null) {
            return res.status(500).json("로그인하십쇼");
          }

        let commentData = {
            content: req.body.comment,
            parent: new ObjectId(req.body._id),
            email: session.user.email,
            author: session.user.name
        }

        let db = (await connectDB).db("forum");
        let result = await db.collection("comment").insertOne(commentData);
        res.status(200).json(commentData);
    }

}