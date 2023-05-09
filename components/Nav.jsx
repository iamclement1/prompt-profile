"use client"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image'
const Nav = () => {
   const isLoggedUser = true;
   const { data: session } = useSession();
   const [providers, setProviders] = useState(null);
   const [toggleDropdown, setToggleDropdown] = useState(false);

   useEffect(() => {
      const setUpProviders = async () => {
         const response = await getProviders();
         setProviders(response)
      }
      setUpProviders();
   }, [])
   return (
      <nav className='flex-between w-full mb-16 pt-3 '>
         <Link href={'/'} className='flex gap-2 flex-center cursor-pointer
         orange_gradient text-2xl font-semibold'>
            SPP
            <p className='text_logo text-black text-sm'>The Public Profile</p>
         </Link>

         {/* Desktop navigation */}
         <div className='sm:flex hidden'>
            {
               session?.user ? (
                  <div className='flex gap-3 md:gap-5'>
                     <Link href={'/create-post'}
                        className='black_btn'>
                        Create Post
                     </Link>
                     <button type='button '
                        onClick={signOut}
                        className='outline_btn'>
                        Sign Out
                     </button>

                     {/* profile */}
                     <Link href={'/profile'}>
                        <FaUserCircle className='text-2xl mt-1' />
                     </Link>
                  </div>
               ) : (
                  <>
                     {
                        providers && Object.values(providers).map((provider) => (
                           <button type='button'
                              key={provider.name}
                              onClick={() => signIn(provider.id)}
                              className='black_btn'>
                              Sign In
                           </button>
                        ))
                     }
                  </>
               )
            }
         </div>

         {/* Mobile navigation */}

         <div className='sm:hidden flex relative'>
            {session?.user ? (
               <div className='flex'>
                  {/* <Image
                     src={session?.user.image}
                     width={37}
                     height={37}
                     className='rounded-full'
                     alt='profile'
                     onClick={() => setToggleDropdown(!toggleDropdown)}
                  /> */}
                  {
                     session?.user ? (
                        <Image src={session?.user.images}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown((prev) =>!prev)} />
                     ) : (
                        <FaUserCircle className='text-2xl mt-1'
                           onClick={() => setToggleDropdown((prev) => !prev)} />
                     )
                  }


                  {toggleDropdown && (
                     <div className='dropdown'>
                        <Link
                           href='/profile'
                           className='dropdown_link'
                           onClick={() => setToggleDropdown(false)}
                        >
                           My Profile
                        </Link>
                        <Link
                           href='/create-prompt'
                           className='dropdown_link'
                           onClick={() => setToggleDropdown(false)}
                        >
                           Create Prompt
                        </Link>
                        <button
                           type='button'
                           onClick={() => {
                              setToggleDropdown(false);
                              signOut();
                           }}
                           className='mt-5 w-full black_btn'
                        >
                           Sign Out
                        </button>
                     </div>
                  )}
               </div>
            ) : (
               <>
                  {providers &&
                     Object.values(providers).map((provider) => (
                        <button
                           type='button'
                           key={provider.name}
                           onClick={() => {
                              signIn(provider.id);
                           }}
                           className='black_btn'
                        >
                           Sign in
                        </button>
                     ))}
               </>
            )}
         </div>
      </nav>
   )
}

export default Nav