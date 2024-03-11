import { getProfileAsUser, getUsersAsAdmin, getUsersAsUser } from "./user.repository.js"


export const getUsersService = async (req) => {
    const page = parseInt(req.body.page - 1)
    const pageSize = parseInt(req.body.pageSize) || 5
    const skip = page * pageSize || 0
    const limit = pageSize
    const roleName = req.tokenData.roleName

    if (roleName == "superadmin" || roleName == "admin") {
        const users = await getUsersAsAdmin(req, skip, limit)
        return users
    }

    if (roleName == "user") {
        const users = await getUsersAsUser(req, skip, limit)
        return users
    }
}

export const getProfileService = async (req, res) => {
    const userName = req.params.userName
    const roleName = req.tokenData.roleName
    if (roleName == "superadmin" || roleName == "admin") {
        const Profile = await User.find({ userName: userName })
        return Profile
    }
    else {
        const Profile = await getProfileAsUser(req, userName)
        return Profile
    }
}