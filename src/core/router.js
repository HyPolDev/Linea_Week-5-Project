import { Router } from "express"
import { login, register } from "./auth.controller.js"

const router = Router()

router.use("/login", login)
router.use("/login", register)

export default router