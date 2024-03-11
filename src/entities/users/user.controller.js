import { request } from "http"
import { handleError } from "../../core/handleError.js"
import { getUsersService } from "./user.service.js"

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
