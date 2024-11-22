import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Main from '@/components/Main';
import StoreProvider from '@/store/StoreProvider';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--opensans',
});

export const metadata: Metadata = {
  title: 'AskNebula | Best psychics & astrologers',
  description:
    'Gain clarity from professional advisors and find your way to happiness - today',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased min-h-[100dvh]`}>
        <StoreProvider>
          <Header />
          <Main>{children}</Main>
        </StoreProvider>
      </body>
    </html>
  );
}
