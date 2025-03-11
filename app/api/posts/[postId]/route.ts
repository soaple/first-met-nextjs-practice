import { NextRequest, NextResponse } from 'next/server';
import samplePosts from '@/lib/constants/sample-posts.json';

interface RequestPayload {
    params: Promise<{ postId: string }>;
}

export async function GET(request: NextRequest, payload: RequestPayload) {
    const { postId } = await payload.params;

    const post = samplePosts.find((post) => {
        return post.id === postId;
    });

    if (!post) {
        return NextResponse.json('Not found', {
            status: 404,
        });
    }

    return NextResponse.json(post, {
        status: 200,
    });
}
