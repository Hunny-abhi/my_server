class ApiError extends Error {
    constructor(
        statusCode,
        message = 'An unexpected error occurred',
        errors = [],
        statck = '' 
        
    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.statck = statck;
        this.success = false;
        this.message = message;
        this.date = null;
    }
}

module.exports = ApiError;