function find_max(list, end_index) {
    var current_max = 0
    var current_max_index = 0
    for (var index = 0; index <= end_index; index++) {
        const element = list[index]
        console.log('Element:', element, 'Index:', index)
        if (element > current_max) {
            current_max = element
            current_max_index = index
        }
    }
    return current_max_index
}

function swap_elements(list, index1, index2) {
    const temp = list[index1]
    list[index1] = list[index2]
    list[index2] = temp
}

function selection_sort(list) {
//     Sort from smallest to biggest
    var x = 0
    for (var end_index = list.length - 1; end_index > 0; end_index--) {
        console.log('Pass', ++x)
        const max_index = find_max(list, end_index)
        console.log('Max Element', list[max_index], 'Max Index:', max_index)
        swap_elements(list, max_index, end_index)
        console.log()
    }
}

const myList = [25, 32, 12, 49, 30, 14]
console.log('Unsorted List:', myList)
selection_sort(myList)
console.log('Sorted List:', myList)