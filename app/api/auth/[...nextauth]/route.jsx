import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@/utils/database";
import User from "@/models/user"; 

const handler = NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
   ],
   async session({ session }) {
      const sessionUser = await User.findOne({
         email: session.user.email
      })

      //update userid
      session.user.id = sessionUser._id.toString();
   },
   async signIn({ profile }) {
      try {
         //serverless
         await connectToDB();

         //check if a user already exist
         const userExits = await User.findOne({
            email: profile.email
         })

         //if not, create a new user
         if(!userExits){
            await User.create({
               email: profile.email,
               username: profile.name.replace(" ", "").toLowerCase(),
               image: profile.picture
            })
         }

         return true;
      } catch(error){
         console.log(error);
         return false;
      }
   }
})

export { handler as GET, handler as POST };