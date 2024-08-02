console.log('');
console.log('EXERCISE 9');
newArray = []
function converting (array){
    for (i = 0; i < array.length-1; i++){
        for (j = 0; j < i.length-1; j++){
            newArray += array[i][j]
        }
        
    }console.log(newArray);
}
converting ([[1,2],[3,4],[5,6]])