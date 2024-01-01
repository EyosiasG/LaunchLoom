import './globals.css'
import Nav from '../components/Nav'
import AuthProvider from '../components/AuthProvider'




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AuthProvider>


        <body>
          <div>
            <Nav />
            {children}

          </div>

        </body>
      </AuthProvider>
    </html>
  )
}
