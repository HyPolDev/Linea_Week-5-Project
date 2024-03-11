import { handleError } from "../../core/handleError.js"
import { getProfileService, getUsersService } from "./user.service.js"

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
        if (error.message === "Users not found" ||
            `No users found at page ${req.body.page}`
        ) {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Cant get users, server error", 500)
    }
}