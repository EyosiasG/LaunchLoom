import './globals.css'
import Nav from '../components/Nav'
import AuthProvider from '../components/AuthProvider'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AuthProvider>


        <body className={roboto.className}>
          <div>
            <Nav />
            {children}

          </div>

        </body>
      </AuthProvider>
    </html>
  )
}
