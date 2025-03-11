import Image from 'next/image';

interface PostFragmentProps {
    post: MyNextApp.Post;
}

function PostFragment(props: PostFragmentProps) {
    const { post } = props;

    return (
        <div>
            <Image
                src={post.image}
                alt='post image'
                priority
                width={200}
                height={200}
                className='w-[200] h-[200] object-cover'
            />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default PostFragment;
