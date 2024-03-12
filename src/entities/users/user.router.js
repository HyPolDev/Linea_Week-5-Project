import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { deleteProfile, getProfile, getUsers, updateProfile } from "./user.controller.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"

const router = Router()

router.get("/", auth, getUsers)          // Done+tested
router.get("/:userName", auth, getProfile) // Done+tested
router.delete("/:userName", auth, isSelfOrAdmin, deleteProfile) // Done+tested
router.put("/:userName", auth, isSelfOrAdmin, updateProfile)

export default router 