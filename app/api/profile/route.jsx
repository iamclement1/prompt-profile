import { connectToDB } from "@/utils/database";
import Profile from "@/models/profile";

export const GET = async (req) => {
   try {
      await connectToDB();

      const profile = await Profile.find({}).populate('creator');

      return new Response(JSON.stringify(profile), {
         status: 200
      })
   } catch (error) {
      return new Response("Failed to fetch profile",{
         status: 500
      })
   }
}