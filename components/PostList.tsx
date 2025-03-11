'use client';

import { use } from 'react';
import dynamic from 'next/dynamic';
const PostListItem = dynamic(() => import('@/components/PostListItem'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});

interface PostListProps {
    postsPromise: Promise<MyNextApp.Post[]>;
}

function PostList(props: PostListProps) {
    const { postsPromise } = props;

    const posts = use(postsPromise);

    return (
        <ul style={{ listStylePosition: 'inside' }}>
            {posts.map((post) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                    />
                );
            })}
        </ul>
    );
}

export default PostList;
