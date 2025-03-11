'use client';

import { use } from 'react';
import Link from 'next/link';

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
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default PostList;
