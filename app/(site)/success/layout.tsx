export const metadata = {
  title: 'Success - Txtli',
  description: 'Your payment was successful!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
