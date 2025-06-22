let comparisons = 0

function merge(array1, array2) {
    // Checking if array1 and array2 are disjointed
    // If so we connect both lists and return early
    // if (array1[array1.length - 1] <= array2[0]) {
    //     return [...array1, ...array2]
    // } else if (array2[array2.length - 1] <= array1[0]) {
    //     return [...array2, ...array1]
    // }

    // Normal Merging
    let sorted_list = []

    let array1_index = 0;
    let array2_index = 0;
    while (array1_index < array1.length && array2_index < array2.length) {

        comparisons += 1
        const element1 = array1[array1_index]
        const element2 = array2[array2_index]
        console.log(element1, element2)
        if (element1 < element2) {
            sorted_list.push(element1)
            array1_index++
        } else {
            sorted_list.push(element2)
            array2_index++
        }
    }

    // Remaining lements
    sorted_list.push(...array1.slice(array1_index))
    sorted_list.push(...array2.slice(array2_index))

    return sorted_list
}

function merge_sort(array) {
    if (array.length === 1) {
        return array
    }
    const middle_index = Math.floor(array.length / 2)
    const left_array = array.slice(0, middle_index)
    const right_array = array.slice(middle_index)

    const sorted_left = merge_sort(left_array)
    const sorted_right = merge_sort(right_array)
    return merge(sorted_left, sorted_right)
}

myArray = [12, 2, 19, 4, 15, 10, 7]
console.log(JSON.stringify(myArray))
sorted_array = merge_sort(myArray)
console.log(JSON.stringify(sorted_array))
console.log('Comparisons:', comparisons)