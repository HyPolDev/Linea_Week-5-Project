import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { getProfile, getUsers } from "./user.controller.js"

const router = Router()

router.get("/", auth, getUsers)
router.get("/:userName", auth, getProfile)

export default router 