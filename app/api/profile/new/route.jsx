import { connectToDB } from "@/utils/database";
import Profile from "@/models/profile";
export const POST =  async(req, res) => {
   const { userId, prompt, tag } = await req.json();

   try {
      await connectToDB(); 
      const newProfile = new Profile({
         creator: userId,
         prompt, 
         tag
      });
      await newProfile.save();

      return new Response(JSON.stringify(newProfile), {
         status: 201,
      })
   } catch (error) {
      return new Response("Failed to create a new prompt", {
         status: 500
      })
   }
}