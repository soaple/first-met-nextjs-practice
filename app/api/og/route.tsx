import { NextRequest, NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';

export async function GET(request: NextRequest) {
    const title = request.nextUrl.searchParams.get('title');
    if (!title) {
        return NextResponse.json('title does not specified.', {
            status: 400,
        });
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    fontSize: 96,
                }}>
                {title}
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
