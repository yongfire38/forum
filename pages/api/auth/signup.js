import { connectDB } from "@/app/util/database";
import bcrypt from "bcrypt";

export default async function signUpApi(req, res) {
  let db = (await connectDB).db("forum");
  const allUsers = await db.collection("user_cred").find().toArray();

  if (
    req.body.name === "" ||
    req.body.password === "" ||
    req.body.email === ""
  ) {
    return res.status(500).json("항목 다 채워서 버튼 누르세요");
  } 

  try {
    switch (req.method) {
      case "POST":

      let user = await db.collection('user_cred').findOne({email : req.body.email})

      if(user) {
         throw new SyntaxError("같은 메일이 이미 있어요.");
       }

        let hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;

        //이름 넣을 때 admin이란 글자 들어가면 그 사람은 임의로 관리자 권한 줌
        if (req.body.name.indexOf("admin") !== -1) {
          req.body.role = "admin";
        }

        await db.collection("user_cred").insertOne(req.body);
        res.redirect(302, "/list");
        break;
      default:
        res.json({ status: 200, data: allUsers });
        break;
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      return res.status(400).json(error.message);
    }
    return res.status(400).json("에러남요");
  }
}
