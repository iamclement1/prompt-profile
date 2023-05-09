import Link from "next/link"


const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
   return (
      <section className="w-full max-w-full flex-start flex-col">
         <h1 className="head_text text-left">
            <span className="blue-gradient">
               {type} Post
            </span>
         </h1>
         <p className="desc text-left">
            {type} and share your profile to the world, take action now.
         </p>

         <form action="" onSubmit={handleSubmit}
            className="mt-10 w-full max-w-2xl flex flex-col gap-7 ">
            <label htmlFor="">
               <span className="font-satoshi font-semibold text-base text-gray-700">
                  Make your profile speak
               </span>

               <textarea name="" id="" cols="30" rows="10"
                  value={post.prompt}
                  onChange={(event) => setPost({
                     ...post,
                     prompt: event.target.value
                  })}
                  placeholder="Write your description here..."
                  className="form_textarea"
                  required />
            </label>

            {/* tag */}
            <label htmlFor="">
               <span className="font-satoshi font-semibold text-base text-gray-700">
                  Tag {` `} <span className="font-normal">(#frontend, #uiux)</span>
               </span>

               <input value={post.tag}
                  onChange={(event) => setPost({
                     ...post,
                     tag: event.target.value
                  })}
                  placeholder="#tag"
                  className="form_input "
                  required />
            </label>

            <div className="flex-end mx-3 mb-5 gap-4">
               <Link href={'/'}
               className="text-gray-500 text-sm">
                  Cancel
               </Link>
               <button type="submit"
               disabled={submitting }
               className="px-5 py-1.5 text-sm bg-primary-orange text-white
               rounded-md">
                  {
                     submitting ?  `${type}...` : type
                  }
               </button>
            </div>
         </form>
      </section>
   )
}

export default Form