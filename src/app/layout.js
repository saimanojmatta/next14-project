import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/navbar/Navbar'
import Footer from '@/Components/footer/Footer'
// import ClientSideProivderTest from '@/Components/ClientSideProivderTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    default:"Next.js 14 Homepage",
    template:"%s|Next.js"
  } ,
  description: 'Next.js starter app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {/* <ClientSideProivderTest> */}
          <div className='container'>
             <Navbar/>
            {children}
            <Footer/>
          </div>
        {/* </ClientSideProivderTest> */}
        </body>
    </html>
  )
}