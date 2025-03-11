import type { Metadata } from 'next';

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

    return (
        <div className='box page'>
            <p>{`PostItemPage ${postId}`}</p>
        </div>
    );
}

export default PostItemPage;
