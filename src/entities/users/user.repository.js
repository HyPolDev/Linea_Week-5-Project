import { read } from "fs";
import User from "./User.model.js"

export const getUsersAsAdmin = async (req, skip, limit) => {

    const users = await User.find({}, "-pasword")
        .skip(skip)
        .limit(limit)

    if (users.length == 0) {
        throw new Error(`No users found at page ${req.body.page}`)
    }

    return users;

}

export const getUsersAsUser = async (req, skip, limit) => {

    const users = await User.find({ is_active: true }, "userName")
        .skip(skip)
        .limit(limit)

    if (users.length == 0) {
        throw new Error(`No users found at page ${req.body.page}`)
    }

    return users;
}

export const getProfileAsUser = async (req, userName) => {

    const user = await User.find({ userName: userName })

    if (user[0].visibility == "public" ||
        req.tokenData.userName == user[0].userName ||
        user.followers.includes(req.tokenData.userName)) {
        let Profile = User.find({ userName: userName }, "-pasword")

        return Profile
    }
    else {
        return User.find({ userName: userName }, {
            userName: 1,
            followers: 1,
            following: 1,
            about: 1
        })
    }
}

export const checkUserIsActive = async (userName) => {

    const user = await User.find({ userName: userName })

    return user[0].is_active
}

export const deleteProfileRepository = async (userName) => {
    const deleteUser = await User.findOneAndUpdate(
        { userName: userName },
        { $set: { is_active: false } },
        { new: true }
    )
    return deleteUser
}

export const updateProfileRepository = async (req) => {
    const userName = req.params.userName
    const body = req.body

    const updateUser = await User.findOneAndUpdate(
        { userName },
        body,
        { new: true })
    return updateUser
}

export const getProfileRepository = async (userName) => {

    const profile = await User.find({ userName: userName }).select("-password")

    if (!profile) {
        throw new error("Profile not found")
    }

    return profile
}
