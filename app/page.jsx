import { Feeds } from "@/components"

const Home = () => {
   return (
      <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center">
            Share Profile
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
               Your Public Profile
            </span>
         </h1>
         <p className="desc text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>

         {/* feeds */}
         <Feeds />
      </section>
   )
}

export default Home