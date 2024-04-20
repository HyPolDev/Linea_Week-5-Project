import { auth } from "../../validator/auth.js"
import User from "../users/User.model.js"
import Post from "./Post.model.js"
import { checkPostIsActive, createCommentRepository, createPostRepository, deletePostRepository, getPostsAsAdmin, getPostsAsUser } from "./post.repository.js"

export const getPostsService = async (req) => {

    const page = parseInt(req.body.page - 1)
    const pageSize = parseInt(req.body.pageSize) || 1000
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


    const postId = req.params.id

    const isActive = await checkPostIsActive(postId)

    if (!isActive) {
        throw new Error("Post already deleted")
    }

    const post = await deletePostRepository(postId)

    return post

}

export const createPostService = async (req) => {

    const text = req.body.text
    const authorId = req.tokenData.userId
    const userName = req.tokenData.userName

    if (!text) {
        throw new Error("Message needed")
    }

    const post = await createPostRepository(text, authorId, userName)

    return post
}

export const getPostByIdService = async (req, res) => {

    const userName = req.tokenData.userName
    const post = await Post.findById(req.params.id)
    const author = await User.findById(post.authorId)

    if (author.visibility !== "public" &&
        !author.followers.includes(userName) &&
        author.userName !== userName) {
        throw new Error("Private post")
    }

    if (!post.is_active) {
        throw new Error("Post not found")
    }

    return post
}

export const updatePostService = async (req, res) => {

    const post = await Post.findById(req.body.id)
    const authorId = post.authorId
    const message = req.body.message

    if (!post) {
        throw new Error("post not found")
    }

    if (!authorId == req.tokenData.userId) {
        throw new Error("Can't update others post")
    }

    if (message.length < 1) {
        throw new Error("Can't uptade to blank")
    }

    const updatedPost = await Post.updateOne(
        { _id: req.body.id },
        { $set: { text: message } },
        { new: true })

    return updatedPost
}

export const likePostService = async (req, res) => {

    let postToLikeId = req.params.id
    let userName = req.tokenData.userName

    const post = await Post.findById(postToLikeId)

    if (post.likes.includes(userName)) {
        post.likes.pull(userName)
    }
    else {
        post.likes.push(userName)
    }

    await post.save()
    return post
}

export const createCommentService = async (req, res) => {

    const text = req.body.text
    const commentOf = req.body.commentOf
    const authorId = req.tokenData.userId

    if (!text) {
        throw new Error("Message needed")
    }
    if (!commentOf) {
        throw new Error("Message needed")
    }

    const post = await createCommentRepository(text, authorId, commentOf)

    return post
}

export const getUserPostsService = async (req, res) => {
    const user = req.tokenData.userId

    const posts = await Post.find({ is_active: true, authorId: user })

    return posts
}