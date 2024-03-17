import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { acceptFollow, declineFollow, deleteProfile, followProfile, getFollowRequests, getProfile, getProfilePosts, getUsers, updateProfile } from "./user.controller.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"

const router = Router()

router.get("/followRequests", auth, getFollowRequests)
router.get("/", auth, getUsers)          // Done+tested
router.get("/:userName", auth, getProfile) // Done+tested
router.delete("/:userName", auth, isSelfOrAdmin, deleteProfile) // Done+tested
router.put("/:userName", auth, isSelfOrAdmin, updateProfile) // Done +tested
router.put("/follow/:userName", auth, followProfile)
router.put("/acceptFollow/:userName", auth, acceptFollow)
router.put("/declineFollow/:userName", auth, declineFollow)
router.get("/posts/:userName", auth, getProfilePosts)

export default router 