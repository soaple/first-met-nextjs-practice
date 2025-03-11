interface PostFragmentProps {
    post: MyNextApp.Post;
}

function PostFragment(props: PostFragmentProps) {
    const { post } = props;

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
