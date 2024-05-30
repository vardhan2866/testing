class customErr extends Error {
    constructor(statusCode, message, status) {
        super(message)
        this.statusCode = statusCode
        this.status = status
    }

}

module.exports = customErr;