import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Feliz cumpleaños Mela',
  description: 'Feliz cumpleaños Melita, espero que este nuevo año de vida te traiga cosas lindas, Mela. Que vivas momentos que te hagan sonreír de verdad y que no te falten razones para sentirte feliz.',
  generator: 'sebastian',
  icons: {
    icon: '/icono.ico',
    apple: '/icono.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
