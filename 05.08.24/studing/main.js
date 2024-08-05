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
let myProduct = { 
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
getCategoriesLabels(myProduct, '2')