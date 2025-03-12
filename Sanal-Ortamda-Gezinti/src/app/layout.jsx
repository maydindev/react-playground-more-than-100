import './globals.css'
import { Orbitron } from 'next/font/google'

const orbitron_init = Orbitron({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-orbitron',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={orbitron_init.variable}>{children}</body>
    </html>
  )
}
