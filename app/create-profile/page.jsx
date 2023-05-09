'use client';
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Form } from "@/components";
import { useRouter } from "next/navigation";

const CreateProfile = () => {
   const router = useRouter();
   const { data: session, status } = useSession();
   const [submit, setSubmit] = useState(false);
   const [post, setPost] = useState({
      prompt: '',
      tag: '',
   })

   const createPrompt = async (event) => {
      event.preventDefault();

      setSubmit(true);

      try {
         const response = await fetch('api/profile/new', {
            method: 'POST',
            body: JSON.stringify({
               prompt: post.prompt,
               userId: session?.user.id,
               tag: post.tag
            })
         })
         if(response.ok) {
            router.push('/');
         }
      } catch (error) {
         console.log(error);

      } finally {
         setSubmit(false);
      }
   }
   return (
      <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submit}
      handleSubmit={createPrompt} />
   )
}

export default CreateProfile