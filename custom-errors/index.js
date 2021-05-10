'use strict'

class MyError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

class ReadError extends MyError {
    constructor(message, cause) {
        super(message)
        this.cause = cause
    }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super('Нет свойства: ' + property)
        this.property = property
    }
}

function validateUser(user) {
    if (!user.age) throw new PropertyRequiredError('age')
    if (!user.job) throw new PropertyRequiredError('job')
    if (!user.name) throw new PropertyRequiredError('name')
}


function readUser(json) {
    let user



    try {
        user = JSON.parse(json)
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError('Синтаксическая ошибка', err)
        }

        throw err
    }



    try {
        validateUser(user)
    } catch(err) {
        if (err instanceof ValidationError) {
            throw new ReadError('Ошибка валлидации!', err)
        }

        throw err
    }



    return user
}




try {
    readUser('{"bad json"}')
} catch(e) {
    if (e instanceof ReadError) {
        console.log(e)
        console.log('Cause error: ' + e.cause)
    }

    throw e
}
