
export const auth = async (req, res, next) => {
    try {

        if (req.tokenData.userId !== parseInt(req.params.id)) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "No valid token || isSelf error",
            error: error
        })
    }
}