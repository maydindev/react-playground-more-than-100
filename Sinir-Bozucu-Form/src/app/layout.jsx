import './globals.css'
import { Comic_Neue } from 'next/font/google'

const comic_neue_init = Comic_Neue({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-comic_neue',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={comic_neue_init.variable}>{children}</body>
    </html>
  )
}
