import './globals.css'
import { Fredoka } from 'next/font/google'

const fredoka_init = Fredoka({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fredoka_init',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={fredoka_init.variable}>{children}</body>
    </html>
  )
}
