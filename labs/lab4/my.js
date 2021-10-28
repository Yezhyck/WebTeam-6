
function doTask(){
var arr = createAnArray()
document.getElementById("array").innerHTML="Мисив :"+arr;
document.getElementById("task1Answer").innerHTML="Різниця між max та min :"+( Math.max(...arr) - Math.min(...arr));
document.getElementById("task2Answer").innerHTML= "Відсортований мсив : " +quickSort(arr, 0, arr.length - 1);
}


function createAnArray() {
 return randomGenerator(parseInt(document.getElementById("arraySize").value));
}


function randomGenerator(size) {
    let result = [];
    let firstValue = Math.round(Math.random() * 100);
    result.push(firstValue);
    
    for (let i=0;i<size-1;i++){
        firstValue += Math.random() > 0.5 ? 1:-1;
        result.push(firstValue)
    }
    return result;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}