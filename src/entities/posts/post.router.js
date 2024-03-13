import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { deletePost, getPosts } from "./post.controller.js"

const router = Router()

router.get("/", auth, getPosts)
router.delete("/:id", auth, isSelfOrAdmin, deletePost)

export default router 