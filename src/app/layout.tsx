import { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  weight: ['400'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  subsets: [],
});

export const metadata: Metadata = {
  title: 'NextJS app boilerplate',
  description: 'NextJS app boilerplate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body
        className={`${notoSansJP.variable} break-words bg-slate-900 font-sans text-base text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
