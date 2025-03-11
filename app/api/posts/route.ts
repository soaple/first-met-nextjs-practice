import { NextResponse } from 'next/server';
import samplePosts from '@/lib/constants/sample-posts.json';

export async function GET() {
    return NextResponse.json(samplePosts, {
        status: 200,
    });
}
