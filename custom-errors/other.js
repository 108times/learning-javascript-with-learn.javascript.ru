'use strict'

class MyError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
        this[Symbol.toStringTag] = this.name
    }

    static isErrorInstanceOf(err, toStringTag) {
        return Object.prototype.toString.call(err) === `[object ${toStringTag}]` ? true : false
    }
}

class ValidationError extends MyError {
    constructor(message) {
        super('Ошибка валидации: ' + message)
    }
}

class ReadError extends MyError {
    constructor(message, exception) {
        super(message)
        this.exception = exception
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(field) {
        super('Нет поля: ' + field)
        this.field = field
    }
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(`Ошибка формата поля: ${message} `);
    }
}

class IncorrectLengthFormatError extends FormatError {
    constructor(field, length) {
        super(`Поле ${field} должно содержать минмиум ${length} символов`)
    }
}

class OnlyNumbersFormatError extends FormatError {
    constructor(field) {
        super(`Поле ${field} должно состоять из цифр`)
    }
}

function validateUser(user) {
    if (!user.name)
        throw new PropertyRequiredError('name')

    if (!user.age)
        throw new PropertyRequiredError('age')

}

function catchFormatErrorsInUser(user) {
    if (user.name && user.name.length < 4)
        throw new IncorrectLengthFormatError('name', 4)

    if (user.age && isNaN(+user.age))
        throw new OnlyNumbersFormatError('age')
}

function readUser(json) {
    let user
    try {
       user = JSON.parse(json)
    } catch(e) {
        if (e instanceof SyntaxError)
            throw new ReadError('Ошибка синтаксиса JSON', e)
    }

    try {
        validateUser(user)
    } catch(e) {
        if (e instanceof ValidationError) {
            throw new ReadError(e.message, e)
        }
    }

    try {
        catchFormatErrorsInUser(user)
    } catch(e) {
        if (e instanceof FormatError) {
            throw new ReadError(e.message, e)
        }
    }

    return user
}


let json = '{"nam" : "Ami", "age":"123a"}'

try {
   const user = readUser(json)
   alert(JSON.stringify(user, null, 4))
} catch(e) {
    if (e instanceof ReadError) {
        alert(e.message)
        console.log(e.exception)

    } else throw e
}
