import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { createPost, deletePost, getPostById, getPosts, likePost, updatePost } from "./post.controller.js"

const router = Router()

router.post("/", auth, createPost)
router.get("/", auth, getPosts)
router.get("/:id", auth, getPostById)
router.put("/", auth, updatePost)
router.delete("/:id", auth, isSelfOrAdmin, deletePost)
router.put("/like/:id", auth, likePost)


export default router 