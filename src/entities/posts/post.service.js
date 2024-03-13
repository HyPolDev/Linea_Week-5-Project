import Post from "./Post.model.js"
import { getPostsAsAdmin, getPostsAsUser } from "./post.repository.js"

export const getPostsService = async (req) => {

    const page = parseInt(req.body.page - 1)
    const pageSize = parseInt(req.body.pageSize) || 5
    const skip = page * pageSize || 0
    const limit = pageSize

    const roleName = req.tokenData.roleName

    if (roleName == "superadmin" || roleName == "admin") {
        const posts = await getPostsAsAdmin(req, skip, limit)
        return posts
    }

    if (roleName == "user") {
        const posts = await getPostsAsUser(req, skip, limit)
        return posts
    }
}