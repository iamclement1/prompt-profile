'use client';
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const ProfileCard = ({ profile, handleTagClick, handleEdit, handleDelete }) => {
   return (
      <div className="prompt_card">
         <div className="flex justify-between item-start gap-5">
            <div>
               {/* <Image src={profile.creator.image} 
               alt="user-image"
               width={40}
               height={40}
               className="rounded-full object-contain" /> */}
            </div>
         </div>
      </div>
   )
}

export default ProfileCard