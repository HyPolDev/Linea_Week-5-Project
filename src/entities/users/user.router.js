import { Router } from "express"
import { auth } from "../../validator/auth.js"
import { acceptFollow, declineFollow, deleteProfile, followProfile, getFollowRequests, getProfile, getProfilePosts, getUsers, updateProfile } from "./user.controller.js"
import { isSelfOrAdmin } from "../../validator/isSelfOrAdmin.js"

const router = Router()

router.get("/followRequests", auth, getFollowRequests)
router.get("/", auth, getUsers)
router.get("/:userName", auth, getProfile)
router.delete("/:userName", auth, isSelfOrAdmin, deleteProfile)
router.put("/:userName", auth, isSelfOrAdmin, updateProfile)
router.put("/follow/:userName", auth, followProfile)
router.put("/acceptFollow/:userName", auth, acceptFollow)
router.put("/declineFollow/:userName", auth, declineFollow)
router.get("/posts/:userName", auth, getProfilePosts)

export default router 