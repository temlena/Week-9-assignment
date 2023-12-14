//Build a simple loop inside a function that takes an array an prints the value of the array to the console
function printArray(arr){
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}

let array = ['C++', 'Java', 'Ruby', 'Kotlin', 'Python', 'Golang', 'C#', 'Swift', 'Javascript', 'Flutter'];
printArray(array);
