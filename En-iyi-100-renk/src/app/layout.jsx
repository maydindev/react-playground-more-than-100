import './globals.css'
import { Fredericka_the_Great } from 'next/font/google'

const fredericka_the_great_init = Fredericka_the_Great({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-new_rockerfredericka_the_great',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={fredericka_the_great_init.variable}>{children}</body>
    </html>
  )
}
