for (let i = 1; i <= 5; i ++){
    console.log(`------------------------------

        THIS IS INTERATION NUMBER ${i} OF THE MAIN (i) LOOP`)
    for (j = 1; j <= 5; j++){
        console.log(`This is iteration number ${j} of the inner (j) loop`);
    }
}

console.log('');
console.log('Multiplication table');
for ( i = 1; i <= 10; i++){
    let emptyValue =''
    for ( j = 1; j <= 10; j++){
        emptyValue+= `${i*j} `;
    }
    console.log(emptyValue)
}


//Exercise 8 omer
