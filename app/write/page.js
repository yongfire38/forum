export default function Write() {
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
}