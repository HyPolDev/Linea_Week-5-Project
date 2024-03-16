import { Router } from "express"
import { login, register } from "../entities/auth/auth.controller.js"
import userRoutes from "../entities/users/user.router.js"
import postRoutes from "../entities/posts/post.router.js"

const router = Router()

router.use("/login", login)
router.use("/register", register)
router.use("/users", userRoutes)
router.use("/posts", postRoutes)

export default router