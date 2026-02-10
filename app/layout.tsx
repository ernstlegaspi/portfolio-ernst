import type { Metadata } from 'next'

import './globals.css'

import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ernst legaspi - Portfolio',
  description: 'My Portfolio. You can see some of the projects that I developed so far, my skills, and experiences.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang='en'>
    <body className='antialiased font-main bg-black/95 text-white flex flex-col items-center justify-center min-h-screen'>
      <Image
        alt='Penguin'
        width={400}
        height={400}
        src='/penguin.webp'
      />

      <h1 className='text-[60px] mt-[-50px]'>🚧 Renovating 🚧</h1>
      {/* {children} */}
    </body>
  </html>
}
