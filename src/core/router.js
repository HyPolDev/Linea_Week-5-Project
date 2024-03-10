import { Router } from "express"
import { login, register } from "../entities/auth/auth.controller.js"

const router = Router()

router.use("/login", login)
router.use("/register", register)

export default router