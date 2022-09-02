import { NextApiHandler } from "next";
import NextAuth from "next-auth";

import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

import Adapters from "next-auth/adapters";
//const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

/*const options = {
    providers: [
        FacebookProvider({
            clientId:process.env.NEXTAUTH_URL,
            clientSecret:process.env.NEXTAUTH_URL
        })
    ]
}
export default authHandler;*/
