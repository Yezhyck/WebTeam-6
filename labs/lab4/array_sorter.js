function generateArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 40));
    }
    return array;
}

function findMin(array, start, finish) {
    var min = array[start];
    for (let index = start; index < finish; index++) {
        if (array[index] < min) {
            min = array[index];
            minIndex = index;
        }
    }
    return min;
}

function transformArray(inputArray) {
    let array = Array.from(inputArray);
    var minIndex = array.indexOf(findMin(array, 0, array.length));
    if (minIndex != 0) {
        array.unshift(array.splice(minIndex, 1));
    }
    for (let i = 1; i < array.length; i++) {
        minIndex = array.indexOf(findMin(array, i, array.length));
        array.unshift(array.splice(minIndex, 1));
    }
    return array;
}

function execute() {
    var result = document.getElementById("result");
    var inputSize = document.getElementById("input");
    var size = Number(inputSize.value);
    if (!isNaN(size)) {
        let unprepearedArray = generateArray(size);
        var minElement = findMin(unprepearedArray, 0, unprepearedArray.length);
        let tranfrormedArray = transformArray(unprepearedArray);
        result.innerHTML = '<div id="inputArray" class="field">Сгенерований масив: ' + unprepearedArray + '</div>' +
            '<div id="minValue" class="field">Мінімальний елемент масиву: ' + minElement + '</div>' +
            '<div id="resultArray" class="field">Вихідний выдсортований масив: ' + tranfrormedArray + '</div>';
    } else {
        alert("Некоректний формат даних.")
    }
}