import './globals.css'
import { Bungee_Shade } from 'next/font/google'

const bungee_shade_init = Bungee_Shade({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bungee_shade',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={bungee_shade_init.variable}>{children}</body>
    </html>
  )
}
