export default function SignUp() {
    return (
        <div className="p-20">
            <h4>회원 가입</h4>
            <form action="/api/user/new" method="POST">
                <input type="text" name="id" placeholder="아이디"></input>
                <input type="password" name="password" placeholder="비번"></input>
                <button type="submit">가입신청 버튼</button>
            </form>
        </div>
    )
}