import { connectDB } from "../util/database";
import Link from "next/link";

export default async function List() {
  let db = (await connectDB).db("forum");
  let results = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {results.map((result, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${results[i]._id}`}>
            <h4>{results[i].title}</h4>
          </Link>
          <p>{results[i].content}</p>
        </div>
      ))}
    </div>
  );
}
