
function toCamelCase(str){
  for (let i = 0; i< str.length; i++) {
    if (str[i]  === "_" || str[i]  === "-") {
      str = str.slice(0,i) + str[i+1].toUpperCase() + str.slice(i+2)
    }
  }
  return str
}

function get_max_sub_sum(arr) {
    let sum = tempSum = arr[0] > 0 ? arr[0] : 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) continue

        if ( arr[i] - 1 === arr[i - 1] ) {
            tempSum += arr[i]
        } else {
            tempSum = arr[i]
        }

        if (tempSum > sum) sum = tempSum
    }

    if (sum < 0) return 0

    return sum
}

console.log(get_max_sub_sum([-1, 2, 3, -9]))
console.log(get_max_sub_sum([2, -1, 2, 3, -9]) )
console.log(get_max_sub_sum([-1, 2, 3, -9, 11]))
console.log(get_max_sub_sum([-2, -1, 1, 2]))
console.log(get_max_sub_sum([100, -9, 2, -3, 5]) )
console.log(get_max_sub_sum([ 1, 2, 3]))
console.log(get_max_sub_sum([ -1, -2, -3]))

function getMaxSubSum(arr) {
    let sum = tempSum = 0
    let y = 1

    for (let i = 0; i < arr.length; i++) {

        tempSum = arr[i]

        for (let j = i; j < arr.length - 1; j++) {
            console.log(`${arr[j] + 1} === ${arr[i + y]} `)
            // if arr[0] + 1 === arr[0 + 1]   ->   if 1 + 1 === 2
            // if arr[1] + 1 === arr[0 + 2]   ->   if 2 + 1 === 3
            // if arr[2] + 1 === arr[0 + 3]   ->   if 3 + 1 === 4
            // if 4 + 1 ===
            if (arr[j] + 1 === arr[i  + y]) {
                tempSum += arr[j]
                y++
            }

        }
        if (tempSum > sum) sum = tempSum
    }
    return sum
}

console.log(getMaxSubSum([1,2,3,4]))

// console.log(getMaxSubSum([7,8]))

// console.log(getMaxSubSum([-1, 2, 3, -9]))

// console.log(getMaxSubSum([1,2,3,4]))

// console.log(getMaxSubSum([1,2,3,4,5,6,7,8]))
