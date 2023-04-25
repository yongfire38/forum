import { connectDB } from "@/app/util/database";

export default async function addUserApi(req, res) {
  if (req.body.id === "" || req.body.password === "") {
    return res.status(500).json("아이디랑 비번 채워서 버튼 누르세요");
  }

  let db = (await connectDB).db("forum");

  try {
    switch (req.method) {
      case "POST":
        await db.collection("user").insertOne(req.body);
        res.redirect(302, '/list');
        break;
      default:
        const allUsers = await db.collection("user").find().toArray();
        res.json({ status: 200, data: allUsers });
        break;
    }
  } catch (error) {
    return res.status(400).json("에러남요");
  }
}
