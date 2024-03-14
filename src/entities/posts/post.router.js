import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { createPost, deletePost, getPostById, getPosts } from "./post.controller.js"

const router = Router()

router.get("/", auth, getPosts)
router.get("/:id", auth, getPostById)
router.delete("/:id", auth, isSelfOrAdmin, deletePost)
router.post("/", auth, createPost)


export default router 