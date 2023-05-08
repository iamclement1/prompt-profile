import { Nav } from '@/components';
import '@/styles/global.css';

export const metadata = {
   title: "Profile Prompt",
   description: "Share profile for better discovery"
}
const RootLayout = ({children}) => {
   return (
      <html>
         <body>
            <div className='main'>
               <div className='gradient' />
            </div>
            <main className='app'>
               <Nav/>
               {children}
            </main>
         </body>
      </html>
      )
}

export default RootLayout;