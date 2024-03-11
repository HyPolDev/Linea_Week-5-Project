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

    if (user[0].visibility == "public") {
        return User.find({ userName: userName }, {
            userName: 1,
            followers: 1,
            following: 1,
            fisrtName: 1,
            lastName: 1,
            about: 1
        })
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