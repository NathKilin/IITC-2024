//NEW METHODS

///////////////////////////////////////////////////////////////////////
//Find and Index


// const numbers = [10, 45, 60, 25, 80];
// const biggerThan50 = numbers.find(num => num > 50);
// console.log(biggerThan50); // 60

// const prices = [80, 90, 150, 60, 120];
// const indexOfBiggerThan100 = prices.findIndex(price => price > 100)
// console.log(indexOfBiggerThan100);


///////////////////////////////////////////////////////////////////////


//Sort
const students = [
    { name: 'David', averageGrade: 85 },
    { name: 'Sara', averageGrade: 90 },
    { name: 'Michael', averageGrade: 85 },
    { name: 'John', averageGrade: 75 },
    { name: 'Anna', averageGrade: 90 },
    { name: 'Ben', averageGrade: 95 }
  ];
  
  students.sort((a, b) => {
    if (b.averageGrade === a.averageGrade) {
      return a.name.localeCompare(b.name);
    }
    return b.averageGrade - a.averageGrade; 
  });
  
  console.log(students);
  