function quick_sort(array) {
    if (array.length <= 1) {
        return array
    }

    const pivot = array[0]
    const lowerArray = []
    const upperArray = []
    for (const item of array.slice(1)) {
        if (item < pivot) lowerArray.push(item)
        else upperArray.push(item)
    }
    
    return [...quick_sort(lowerArray), pivot, ...quick_sort(upperArray)]
}

const randomArray = []
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.round(Math.random() * 100)
    randomArray.push(randomNumber)
}
const sortedArray = quick_sort(randomArray)
console.log(JSON.stringify(randomArray))
console.log(JSON.stringify(sortedArray))