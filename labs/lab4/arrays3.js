
var innerArray1 = document.getElementById("array1");
var innerArray2 = document.getElementById("array2");
var sortedArray = document.getElementById("array_sorted");
var max = document.getElementById("max")

function makeArray(){
    var size = parseInt(document.getElementById("size").value);
    document.getElementById("size").innerHTML = size;
    var arrayA = Array.from({
        length: size
    }, () => Math.floor(Math.random()*10 + 3));
    innerArray1.innerHTML = arrayA.join(", ");
    var maxOfArray = arrayMax(arrayA);
    max.innerHTML = maxOfArray;
    var arrayB = arrayA.map(value => value*maxOfArray);
    innerArray2.innerHTML = arrayB.join(", ");
    sortedArray.innerHTML = insertionSort(arrayB).join(", ");
}
function arrayMax(arr){
    var len = arr.length, max = -Infinity;
    while (len--){
        if (arr[len]>max){
            max = arr[len];
        }
    }
    return max;
};
function insertionSort(inputArr){
    let n = inputArr.length;
    for(let i = 1; i<n; i++){
        let current = inputArr[i];
        let j = i-1;
        while((j>-1)&&(current>inputArr[j])){
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = current;
    } 
    return inputArr;
}
