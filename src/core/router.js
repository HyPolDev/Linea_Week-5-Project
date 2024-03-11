import { Router } from "express"
import { login, register } from "../entities/auth/auth.controller.js"
import userRoutes from "../entities/users/user.router.js"

const router = Router()

router.use("/login", login)
router.use("/register", register)
router.use("/users", userRoutes)

export default router