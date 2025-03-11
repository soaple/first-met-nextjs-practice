import Link from 'next/link';

interface PostListItemProps {
    post: MyNextApp.Post;
}

function PostListItem(props: PostListItemProps) {
    const { post } = props;

    return (
        <li>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    );
}

export default PostListItem;
