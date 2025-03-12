import './globals.css'
import { Boogaloo } from 'next/font/google'

const boogalo_init = Boogaloo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-boogalo',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={boogalo_init.variable}>{children}</body>
    </html>
  )
}
