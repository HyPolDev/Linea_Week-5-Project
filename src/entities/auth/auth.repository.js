import User from "../users/User.model.js"

export const emailInUse = async (email) => {
    const user = await User.findOne(
        { email: email }
    )

    if (user) {
        throw new Error("Email already in use")
    }
}

export const createUser = async (email, password, userName) => {

    const newUser = await User.create({
        userName: userName,
        email: email,
        password: password
    })

    return newUser
}

export const getUserByEmail = async (email) => {
    const user = await User.findOne(
        {
            email: email
        }
    )

    return user
}

export const checkUserIsActive = async (email) => {

    const user = await User.find({ email: email })

    return user[0].is_active
}