function solution(str){
    const length = str.length
    let tempValue = ""
    const result = []
    for (let index = 0; index < length; index++) {
        tempValue += str[index]
        if (index % 2 !== 0) {
            result.push(tempValue)
            tempValue = ""
        }
        if (index === length - 1 && length % 2 !== 0) {
            tempValue += "_"
            result.push(tempValue)
        }
    }
    return result
}

function solution(string) {
    const result = []
    string.split("").reduce( (prVal, currVal, i, a) => {
        const pair = prVal + currVal
        if (i % 2 !== 0) {
            result.push(pair)
            return ""
        }
        console.log(i)
        return ((i === a.length - 1) && (a.length % 2 !== 0))
        ? result.push( currVal+ "_" )
        : pair
    }, "")
    return result
}

function solution(str) {

    let i = 0
    let result = []

    if (str.length % 2 !== 0) {
        str += "_"
    }

    while (i < str.length) {
        result.push(str[i] + str[i+1])
        i += 2
    }

    return result
}

console.log(solution("abcdefgfg1210"))

