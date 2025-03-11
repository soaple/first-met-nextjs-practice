import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostFragment from '@/components/PostFragment';
import samplePosts from '@/lib/constants/sample-posts.json';

interface PageProps {
    params: Promise<{ postId: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const { params } = props;
    const { postId } = await params;

    return {
        title: `Title (Post ID: ${postId})`,
        description: `Description (Post ID: ${postId})`,
        openGraph: {
            images: [`/api/og?title=${`Post ID: ${postId}`}`],
        },
    };
}

async function PostItemPage(props: PageProps) {
    const { params } = props;
    const { postId } = await params;

    const post = samplePosts.find((post) => {
        return post.id === postId;
    });

    if (!post) {
        notFound();
    }

    return (
        <div className='box page'>
            <p>{`PostItemPage ${postId}`}</p>
            <PostFragment post={post} />
        </div>
    );
}

export default PostItemPage;
