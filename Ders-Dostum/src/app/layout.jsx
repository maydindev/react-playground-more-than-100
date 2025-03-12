import './globals.css'

import { Caveat_Brush } from 'next/font/google'

const caveat_brush_init = Caveat_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-caveat_brush',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={caveat_brush_init.variable}>{children}</body>
    </html>
  )
}
