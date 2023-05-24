export default function Register() {
  return (
    <div className="p-20">
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="이메일" />
        <input name="password" type="password" placeholder="비번" />
        <input name="role" type="hidden" value="user" />
        <button type="submit">id/pw 가입요청</button>
      </form>
    </div>
  );
}
