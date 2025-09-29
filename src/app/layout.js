import './globals.css'

export const metadata = {
  title: 'TravelDash',
  description: 'TravelDash tourism — pixel-perfect clone demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

