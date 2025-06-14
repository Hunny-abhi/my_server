const asycHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.status || 500).jason({
            success: false,
            message: error.message
        })
    }    
}

module.exports = asycHandler;