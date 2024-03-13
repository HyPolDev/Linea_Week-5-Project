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

    const post = await Post.find({})
        .skip(skip)
        .limit(limit)

    if (post.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return post;
}