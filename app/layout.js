import "./globals.css";
import LoginBtn from './LoginBtn';
import LogOutBtn from './LogOutBtn';
import Link from "next/link";
import { authOptions } from '../pages/api/auth/[...nextauth]';

import { getServerSession } from "next-auth"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          {/* <Link href="/signup">SignUp</Link> 예전 회원가입*/}
          <Link href="/register">Register</Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          {session ? <span>{session.user.name} <LogOutBtn/> </span> : <LoginBtn/>}
        </div>
        {children}
      </body>
    </html>
  );
}
