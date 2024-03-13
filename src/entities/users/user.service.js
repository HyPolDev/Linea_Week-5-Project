import { checkUserIsActive, deleteProfileRepository, getProfileAsUser, getProfileRepository, getUsersAsAdmin, getUsersAsUser, updateProfileRepository } from "./user.repository.js"


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

export const deleteProfileService = async (req, res) => {

    const userName = req.params.userName

    const isActive = await checkUserIsActive(userName)

    if (!isActive) {
        throw new Error("User already deleted")
    }

    const profile = await deleteProfileRepository(userName)

    return profile
}

export const updateProfileService = async (req) => {

    const profile = await updateProfileRepository(req)

    return profile
}

export const followProfileService = async (req) => {

    const userToFollowName = req.params.userName
    const userName = req.tokenData.userName

    const isActive = await checkUserIsActive(userToFollowName)

    if (!isActive) {
        throw new Error("User not found")
    }
    if (userToFollowName == userName) {
        throw new error("You cant follow yourself")
    }

    const userToFollow = await getProfileRepository(userToFollowName)
    const userFollowing = await getProfileRepository(userName)

    if (userToFollow[0].followers.includes(userName)) {

        userToFollow[0].followers.pull(userName)
        userFollowing[0].following.pull(userToFollowName)

    } else {

        userToFollow[0].followers.push(userName)
        userFollowing[0].following.push(userToFollowName)

    }

    await userFollowing[0].save()
    await userToFollow[0].save()

    return { userToFollow, userFollowing }
}  