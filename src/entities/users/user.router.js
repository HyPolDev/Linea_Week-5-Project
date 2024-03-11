import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { getUsers } from "./user.controller.js"

const router = Router()

router.get("/", auth, getUsers)

export default router 