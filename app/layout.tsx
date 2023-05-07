import './globals.css';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata = {
  title: '"POST"',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
