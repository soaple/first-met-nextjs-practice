interface PageProps {
    params: Promise<{ postId: string }>;
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
