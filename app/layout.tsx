import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
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
            <body
                style={{ maxWidth: 480, margin: 'auto' }}
                className={`${geistSans.variable} ${geistMono.variable}`}>
                <nav style={{ padding: '16px 0px', display: 'flex', gap: 16 }}>
                    <Link href='/'>Home</Link>
                    <Link href='/feed'>Feed</Link>
                    <Link href='/search'>Search</Link>
                    <Link href='/settings'>Settings</Link>
                </nav>

                <div style={{ display: 'flex', gap: 16 }}>
                    <main style={{ flex: 2 }}>{children}</main>

                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                        {trends}
                        {users}
                    </div>
                </div>
            </body>
        </html>
    );
}
