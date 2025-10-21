import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Ernst legaspi - Portfolio',
  description: 'My Portfolio. You can see some of the projects that I developed so far, my skills, and experiences.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang='en'>
    <body className='antialiased font-main'>
      {children}
    </body>
  </html>
}
