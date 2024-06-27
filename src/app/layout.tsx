export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <header
          style={{
            padding: '1rem',
            background: 'lightblue'
          }}
        >
          Header
        </header>
        {children}
        <footer
          style={{
            padding: '1rem',
            background: 'ghostwhite'
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  )
}
