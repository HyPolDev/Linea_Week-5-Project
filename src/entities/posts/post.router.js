import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"
import { getPosts } from "./post.controller.js"

const router = Router()

router.get("/", auth, getPosts)

export default router 