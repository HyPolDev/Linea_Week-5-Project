import { handleError } from "../../core/handleError.js"
import { getPostsService } from "./post.service.js"

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