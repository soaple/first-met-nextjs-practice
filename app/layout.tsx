import type { Metadata } from 'next';
import Link from 'next/link';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'My Next App',
    description: 'Welcome to My Next App',
};

interface RootLayoutProps {
    children: React.ReactNode;
    trends: React.ReactNode;
    users: React.ReactNode;
}

export default function RootLayout(props: Readonly<RootLayoutProps>) {
    const { children, trends, users } = props;

    return (
        <html lang='en'>
            <body className={`max-w-[480px] m-auto ${notoSansKR.className}`}>
                <nav className='py-4 flex gap-4'>
                    <Link href='/'>Home</Link>
                    <Link href='/feed'>Feed</Link>
                    <Link href='/search'>Search</Link>
                    <Link href='/settings'>Settings</Link>
                </nav>

                <div className='flex gap-4'>
                    <main className='flex-2'>{children}</main>

                    <div className='flex-1 flex flex-col gap-4'>
                        {trends}
                        {users}
                    </div>
                </div>
            </body>
        </html>
    );
}
