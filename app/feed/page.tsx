import { Suspense } from 'react';
import PostList from '@/components/PostList';
import { readPostsAction } from '@/lib/actions/posts';

function FeedPage() {
    const postsPromise = readPostsAction();

    return (
        <div className='box page'>
            <h4>Page</h4>

            <Suspense fallback={<div>Loading...</div>}>
                <PostList postsPromise={postsPromise} />
            </Suspense>
        </div>
    );
}

export default FeedPage;
