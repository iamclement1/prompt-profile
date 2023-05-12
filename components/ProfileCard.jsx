'use client';
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const ProfileCard = ({ profile, handleTagClick, handleEdit, handleDelete }) => {
      const { data: session } = useSession();

      console.log(profile.creator);
   return (
      <div className="prompt_card">
         <div className="flex justify-between item-start gap-5">
            <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
               {/* <Image src={profile.creator.image} 
               alt="user-image"
               width={40}
               height={40}
               className="rounded-full object-contain" /> */}
               <div className="flex flex-col">
                  {/* <h3>
                     {prompt.prompt}
                  </h3> */}
                  <p>
                     {profile.prompt}
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileCard