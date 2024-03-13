import { handleError } from "../../core/handleError.js"
import { deleteProfileService, followProfileService, getProfileService, getUsersService, updateProfileService } from "./user.service.js"

export const getUsers = async (req, res) => {
    try {
        const users = await getUsersService(req)

        res.status(200).json({
            success: true,
            message: "Users retrieved successfuly",
            users: users
        })

    } catch (error) {
        if (error.message === "Users not found" ||
            `No users found at page ${req.body.page}`
        ) {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Cant get users, server error", 500)
    }
}

export const getProfile = async (req, res) => {
    try {

        const profile = await getProfileService(req)

        res.status(200).json({
            success: true,
            message: "User retrieved successfuly",
            profile: profile
        })

    } catch (error) {
        if (error.message === "Users not found") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Cant get users, server error", 500)
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const profile = await deleteProfileService(req)

        res.status(200).json({
            success: true,
            message: "Profile deleted successfuly",
            profile: profile
        })

    } catch (error) {
        if (error.message === "Users not found" ||
            "User already deleted") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not delete profile", 500)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const profile = await updateProfileService(req)

        res.status(200).json({
            success: true,
            message: "Profile updated successfuly",
            profile: profile
        })

    } catch (error) {
        if (error.message === "Users not found") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not delete profile", 500)
    }
}

export const followProfile = async (req, res) => {
    try {
        const followprofile = await followProfileService(req)

        res.status(200).json({
            success: true,
            message: "User followed successfuly",
            followprofile: followprofile
        })

    } catch (error) {
        if (error.message === "Users not found") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not follow profile, server error", 500)
    }
}