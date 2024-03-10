export const isAdmin = (req, res, next) => {
    try {

        if (req.tokenData.roleName == "user") {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
        console.log(req.tokenData.roleName)

        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Role not valid"
        })
    }
}