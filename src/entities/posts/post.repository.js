import Post from "./Post.model.js"

export const getPostsAsAdmin = async (req, skip, limit) => {

    const posts = await Post.find({})
        .skip(skip)
        .limit(limit)

    if (posts.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return post;

}

export const getPostsAsUser = async (req, skip, limit) => {

    const post = await Post.find({ is_active: true })
        .skip(skip)
        .limit(limit)

    if (post.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return post;
}

export const checkPostIsActive = async (_id) => {

    const post = await Post.findById(_id)

    if (!post) {
        throw new NotFoundError("Post not found")
    }

    return post.is_active
}

export const deletePostRepository = async (postId) => {
    console.log("3.1");
    const deletePost = await Post.findByIdAndUpdate(
        postId,
        { $set: { is_active: false } },
        { new: true }
    )
    return deletePost
}