class ApiResponse {
    constructor(statusCode, data, message = 'Success', errors = [], stack = '') {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.errors = errors;
        this.stack = stack;
        this.success = statusCode >= 200 && statusCode < 300;
        this.date = Date;
    }
}

module.exports = ApiResponse;