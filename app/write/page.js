import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth"

export default async function Write() {

    let session = await getServerSession(authOptions);

    if(session) {
        return (
            <div className="p-20">
                <h4>글작성</h4>
                {/* 
                <form action="/api/test" method="POST">
                    <button type="submit">테스트 버튼</button>
                </form>
                 */}
                <form action="/api/post/new" method="POST">
                    <input type="text" name="title" placeholder="글 제목"></input>
                    <input type="text" name="content" placeholder="글 내용"></input>
                    <button type="submit">글 작성 버튼</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="p-20">
                <h4>글작성</h4>
                <span>로그인부터 하세요!</span>
            </div>
        )
    }

    
}