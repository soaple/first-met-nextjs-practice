import { Suspense } from 'react';
import PostList from '@/components/PostList';
import {
    readPostsAction,
    readPostsActionWithCache,
    resetCache,
} from '@/lib/actions/posts';

function FeedPage() {
    const postsPromise = readPostsAction();
    // const postsPromise = readPostsActionWithCache();

    return (
        <div className='box page'>
            <h4>Page</h4>

            <Suspense fallback={<div>Loading...</div>}>
                <PostList postsPromise={postsPromise} />
            </Suspense>

            <button onClick={resetCache}>Reset Cache</button>
        </div>
    );
}

export default FeedPage;
