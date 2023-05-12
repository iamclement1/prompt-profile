import Profile from "@/models/profile";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
   try {
      await connectToDB()

      const profile = await Profile.find({}).populate('creator')

      return new Response(JSON.stringify(profile), { status: 200 })
   } catch (error) {
      return new Response("Failed to fetch all profile", { status: 500 })
   }
} 