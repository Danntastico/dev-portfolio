import { Inter } from 'next/font/google'
import '@/styles/layout.sass'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danntastico',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='nav-container'>
          <h3>Danntastico<span>.</span></h3>
          <div>
            <IconBrandGithub color='#00D9C0' size={30} />
            <IconBrandLinkedin color='#00D9C0' size={30} />
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
