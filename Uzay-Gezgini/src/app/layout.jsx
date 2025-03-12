import './globals.css'
import { Press_Start_2P } from 'next/font/google'

const press_start_2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-press_start_2P',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={press_start_2P.variable}>{children}</body>
    </html>
  )
}
