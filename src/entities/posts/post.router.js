import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { createPost, deletePost, getPostById, getPosts, updatePost } from "./post.controller.js"

const router = Router()

router.post("/", auth, createPost)
router.get("/", auth, getPosts)
router.get("/:id", auth, getPostById)
router.put("/", auth, updatePost)
router.delete("/:id", auth, isSelfOrAdmin, deletePost)


export default router 