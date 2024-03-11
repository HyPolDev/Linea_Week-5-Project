import User from "./User.model.js"
import bcrypt from "bcrypt"

export const getUsersAsAdmin = async (req, skip, limit) => {

    const users = await User.find({}, "-pasword")
        .skip(skip)
        .limit(limit)

    if (users.length == 0) {
        throw new Error(`No users found at page ${req.body.page}`)
    }

    return users;

}