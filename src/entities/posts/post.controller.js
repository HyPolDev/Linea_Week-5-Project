import { handleError } from "../../core/handleError.js"
import { createPostService, deletePostService, getPostByIdService, getPostsService } from "./post.service.js"

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

export const createPost = async (req, res) => {
    try {
        const post = await createPostService(req)

        res.status(200).json({
            success: true,
            message: "Post created succesfully",
            data: post
        })
    } catch (error) {
        if (error.message === "Invalid text" ||
            error.message === "Message needed"
        ) {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not create post", 500)
    }
}

export const getPostById = async (req, res) => {
    try {
        const post = await getPostByIdService(req)

        res.status(200).json({
            success: true,
            message: "Post retrieved succesfully",
            data: post
        })
    } catch (error) {
        if (error.message === "Post not found"
        ) {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not create post", 500)
    }
}