import './globals.css'
import { Charm } from 'next/font/google'

const charm_init = Charm({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-charm',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={charm_init.variable}>{children}</body>
    </html>
  )
}
