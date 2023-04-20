import { connectDB } from "../util/database";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((result, index) => (
        <div className="list-item" key={index}>
          <h4>{result.title}</h4>
          <p>{result.content}</p>
        </div>
      ))}
    </div>
  );
}
