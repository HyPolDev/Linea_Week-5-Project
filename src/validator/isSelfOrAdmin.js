export const isSelfOrAdmin = (req, res, next) => {
    try {
        if (req.tokenData.roleName !== "admin"
            && req.tokenData.userId !== parseInt(req.params.userName)) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Role not valid"
        })
    }
}