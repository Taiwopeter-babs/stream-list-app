import Header from '@/components/Header/Header';
import './globals.css'
import Layout from '@/components/Layout/Layout';
import IReactNode from '@/lib/types';
import { ReactNode } from 'react';


export default function RootLayout({
  children,
}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <Layout>
        <main>{children}</main>
        
        </Layout>
      </body>
    </html>
  )
}
