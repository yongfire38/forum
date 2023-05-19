import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectDB } from "@/app/util/database";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '71adaa13ab7c53b31162',
      clientSecret: '076be76f9eed2fe91b1cb3c32e23e7938dca90ad',
    }),
  ],
  secret : '1q2w3e4r',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 