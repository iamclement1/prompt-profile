import { Nav, Provider } from '@/components';
import '@/styles/global.css';

export const metadata = {
   title: "Profile Prompt",
   description: "Share profile for better discovery"
}
const RootLayout = ({ children }) => {
   return (
      <html>
         <body>
            <Provider>
               <div className='main'>
                  <div className='gradient' />
               </div>
               <main className='app'>
                  <Nav />
                  {children}
               </main>
            </Provider>
         </body>
      </html>
   )
}

export default RootLayout;