'use server';

import { revalidatePath } from 'next/cache';
import samplePosts from '@/lib/constants/sample-posts.json';

export async function readPostsAction(): Promise<MyNextApp.Post[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(samplePosts);
        }, 2000);
    });
}

export async function readPostsActionWithCache(): Promise<MyNextApp.Post[]> {
    return fetch('http://localhost:3000/api/posts', {
        cache: 'force-cache',
    }).then((response) => response.json());
}

export async function resetCache() {
    revalidatePath('/feed', 'page');
}
