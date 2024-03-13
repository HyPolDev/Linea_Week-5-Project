import { handleError } from "../../core/handleError.js"
import { deletePostService, getPostsService } from "./post.service.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await getPostsService(req)

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfuly",
            posts: posts
        })

    } catch (error) {
        if (error.message === "Posts not found" ||
            `No posts found at page ${req.body.page}`
        ) {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Cant get posts, server error", 500)
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await deletePostService(req)

        res.status(200).json({
            success: true,
            message: "Post deleted succesfully",
            data: post
        })
    } catch (error) {
        if (error.message === "You do not have permissions to delete this post" ||
            error.message === "Post not found" ||
            error.message === "Post already deleted"
        ) {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not delete post", 500)
    }
}