let students = [
    {id: "1", name: "omer", grade: 100},
    {id: "2", name: "avi", grade: 40},
    {id: "3", name: "gaga", grade: 80},
];

//                 1
function getValuesFromKey(arr, key){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i][key])
    }
    return newArr
}
console.log(getValuesFromKey(students, 'name'));

/*
//                 2
function getPassStudents(arr, grade){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].grade > grade){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(getPassStudents(students, 70));
*/
//                 3
function createPeople (names){
    let people = []
    for (let i = 0; i < names.length; i++){
        let newPerson = {name: names[i]}
        people.push(newPerson)
    }
    return people;
    console.log(people);
    
}
createPeople(['Yossi', 'Liraz', 'Baba']);

//                  4

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
    { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
    { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
    { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
    { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
    { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
    { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
  ];
  
  function groupBy(array, key) {
    let groupedEmployees = {};
  
    for (let i = 0; i < array.length; i++) {
      let thisDepartment = array[i][key];
  
      if (!groupedEmployees[thisDepartment]) {
        groupedEmployees[propertyValue] = []; // Inicializa um novo array para a chave se ainda não existir
      }
      
      groupedEmployees[propertyValue].push(array[i]); // Adiciona o objeto ao grupo apropriado
    }
  
    return groupedEmployees;
  }
  
  console.log(groupBy(employees, "department"));
  
  
  /*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */