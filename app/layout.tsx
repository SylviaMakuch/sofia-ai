import './globals.css'

export const metadata = {
  title: 'Sofia AI',
  description: 'Partnered up with Chat GPT API to create your virtual best-friend',
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
