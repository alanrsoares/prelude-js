import './global.css'
import 'fumadocs-twoslash/twoslash.css'
import { Inter } from 'next/font/google'
import { Provider } from '@/components/provider'

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
