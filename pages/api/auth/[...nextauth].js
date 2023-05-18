import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '71adaa13ab7c53b31162',
      clientSecret: '076be76f9eed2fe91b1cb3c32e23e7938dca90ad',
    }),
  ],
  secret : '1q2w3e4r'
};
export default NextAuth(authOptions); 