function merge(array1, array2) {
    let sorted_list = []

    let array1_index = 0;
    let array2_index = 0;
    while (array1_index < array1.length && array2_index < array2.length) {
        const element1 = array1[array1_index]
        const element2 = array2[array2_index]
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
    console.log(array)
    if (array.length <= 1) {
        return array
    }
    const middle_index = Math.floor(array.length / 2)
    const left_array = array.slice(0, middle_index)
    const right_array = array.slice(middle_index)

    const sorted_left = merge_sort(left_array)
    const sorted_right = merge_sort(right_array)
    return merge(sorted_left, sorted_right)
}

my_list = [12, 2, 19, 4, 15, 10,  7]
// console.log(my_list)
sorted_list = merge_sort(my_list)
console.log(sorted_list)