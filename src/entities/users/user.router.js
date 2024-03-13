import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { deleteProfile, followProfile, getProfile, getUsers, updateProfile } from "./user.controller.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"

const router = Router()

router.get("/", auth, getUsers)          // Done+tested
router.get("/:userName", auth, getProfile) // Done+tested
router.delete("/:userName", auth, isSelfOrAdmin, deleteProfile) // Done+tested
router.put("/:userName", auth, isSelfOrAdmin, updateProfile) // Done +tested
router.put("/follow/:userName", auth, followProfile)
export default router 