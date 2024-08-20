// NESTED LOOPS
// EXERCISE 1: Star patter
/*
function creatingTriangle(str){
    for (let i = 1; i <= 3; i++){
    let empyStr = '';
        for (let j = 1; j <= i; j++){
            empyStr += str + ' '
        }
        console.log(empyStr);        
    }
}
creatingTriangle('*')
*/
/*let myProduct = { 
    name: "laptop",
    price: 1000,
    isAvailable: true,
    categories: [
      { id: "1", label: "electronics" },
      { id: "2", label: "computers" },
      { id: "3", label: "tech" },
    ],
    info: {
      color: "#fff",
      sizes: ["L", "MD"],
    },
  };
  
  // TODO: Write a function that takes a product and a categoryId and return the category.label
function getCategoriesLabels (product, categoryID){
    for (let i = 0; i < product.categories.length; i++){
        let currentCategory = product.categories[i];
        if (currentCategory.id === categoryID){
            return currentCategory.label;
        }
    }
}

let mylabel = getCategoryLabel(myProduct, "2");
console.log("mylabel: ", mylabel);

// TODO: Write a function that takes a product and return array of categories label and upperCase it
function getCategoriesLabels(product) {
  let categoriesLabels = [];
  for (let i = 0; i < product.categories.length; i++) {
    let label = product.categories[i].label.toUpperCase();
    categoriesLabels.push(label);
  }

  return categoriesLabels;
}

let myCategoriesLabels = getCategoriesLabels(myProduct);
console.log("myCategoriesLabels", myCategoriesLabels);*/
let students = [
    { id: "1", name: "omer", grade: 100 },
    { id: "2", name: "avi", grade: 40 },
    { id: "3", name: "gaga", grade: 80 },
  ];

  function getPassedStudents(arry, minGrade){
    for (let i = 0)
  }