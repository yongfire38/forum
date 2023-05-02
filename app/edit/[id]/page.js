import { connectDB } from "../../util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(props.params.id) });
  
    return (
        <div className="p-20">
        <h4>글 수정페이지</h4>
        <form action="/api/post/edit" method="POST">
            <input name="_id" type="hidden" defaultValue={result._id.toString()}/>
            <input name="title" defaultValue={result.title} />
            <input name="content" defaultValue={result.content} />
            <button type="submit">글 작성 버튼</button>
        </form>
    </div>
    );
  }