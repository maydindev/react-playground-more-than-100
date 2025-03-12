import './globals.css'
import { Courier_Prime } from 'next/font/google'

const courier_prime_init = Courier_Prime({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-courier_prime',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={courier_prime_init.variable}>{children}</body>
    </html>
  )
}
