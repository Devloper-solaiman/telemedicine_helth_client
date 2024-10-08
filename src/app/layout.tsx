import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Providers from '../lib/Providers/Providers';



export const metadata: Metadata = {
  title: 'Telemedicine',
  description: 'Generated by Solaiman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  )
}
