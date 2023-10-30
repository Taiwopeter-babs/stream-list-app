import './globals.css'
import Layout from '@/components/Layout';
import IReactNode from '@/lib/types';


export default function RootLayout({
  children,
}: IReactNode) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
