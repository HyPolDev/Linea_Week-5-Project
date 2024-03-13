import Post from "./Post.model.js"
import { checkPostIsActive, deletePostRepository, getPostsAsAdmin, getPostsAsUser } from "./post.repository.js"

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

export const deletePostService = async (req) => {

    console.log("0")
    const postId = req.params.id
    console.log("1")
    console.log(postId)
    const isActive = await checkPostIsActive(postId)
    console.log("2");
    if (!isActive) {
        throw new Error("Post already deleted")
    }
    console.log("3")
    const post = await deletePostRepository(postId)
    console.log("4");
    return post

}
