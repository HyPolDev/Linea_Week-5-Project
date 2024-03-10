import User from "../users/User.model.js"

export const emailInUse = async (email) => {
    const user = await User.findOne(
        { email: email }
    )

    if (user) {
        throw new Error("Email already in use")
    }
}

export const createUser = async (email, password) => {

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