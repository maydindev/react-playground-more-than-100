import './globals.css'
import { Bungee_Shade, Chango } from 'next/font/google'
const chango_init = Chango({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-chango',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={chango_init.variable}>{children}</body>
    </html>
  )
}
