export const metadata = {
  title: 'Payment Cancelled - Txtli',
  description: 'Your payment was cancelled.',
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
