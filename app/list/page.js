import { connectDB } from "@/app/util/database";

import ListItem from "./ListItem";

export default async function List() {
  let db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();

  results = results.map((a)=>{
    a._id = a._id.toString()
    return a
  })

  return (
    <div className="list-bg">
      <ListItem results={results} />
    </div>
  );
}
