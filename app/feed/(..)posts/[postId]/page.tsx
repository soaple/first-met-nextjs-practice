import PostFragment from '@/components/PostFragment';

interface PageProps {
    params: Promise<{ postId: string }>;
}

async function PostItemPage(props: PageProps) {
    const { params } = props;
    const { postId } = await params;

    return (
        <div className='box page'>
            <p>{`Intercepted PostItemPage ${postId}`}</p>
            <PostFragment postId={postId} />
        </div>
    );
}

export default PostItemPage;
