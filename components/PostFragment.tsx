'use client';

import usePost from '@/lib/hooks/usePost';

interface PostFragmentProps {
    postId: string;
}

function PostFragment(props: PostFragmentProps) {
    const { postId } = props;

    const { isLoading, post, error } = usePost(postId);

    if (isLoading || !post) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div>
            <img
                src={post.image}
                alt='post image'
                width='256px'
                height='auto'
            />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default PostFragment;
