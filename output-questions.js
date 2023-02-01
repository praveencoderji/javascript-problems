/* for (let i = 0; i < 3; i++) {
  ((ind) => {
  setTimeout(function log() {
      console.log(ind); 
  }, ind*1000);
  })(i);
} */

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})(); 

/* var paramsArr = [1, 2, 3]

function abc(paramsArr) {
  paramsArr.forEach(elem => {
    if (elem == 1) {

      return;
    } else {
      console.log("test-----")
    }

  })
  return "Parveen";
}

console.log(abc(paramsArr)) */
  var name = 'Mozilla';
 function init() {
  // name is a local variable created by init
  var displayName =() =>{
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();  

/* var x = 20;
var g = () => {
  console.log(x);
  var x = 33;
}
g();  */


// example of shallow copy deep copy
/* const a =6;
let b = a;
b= 7;

console.log(a, b); */

// 2nd shallow copy
/* const obj = {
"firstName" : "praveen"
}
let objNew = obj;
objNew.firstName = "Mr India";

console.log(obj.firstName, objNew.firstName); */


// 3rd deep copy

/* const obj3 = {
"firstName": "Praveen"
}

let obj3New = {...obj3};
obj3New.firstName = " Praveen New";
console.log(obj3.firstName, obj3New.firstName); */


// 4th deep copy

/* const obj4 = {
"firstName" : "praveen"
};

let obj4New = Object.assign({}, obj4);
obj4New.firstName = " Praveen New";
console.log(obj4.firstName, obj4New.firstName); */


// 5th shallow copy
const obj5 = {
    foods: {
      dinner: 'Pasta'
    }
  }
  
  let obj5New = {
    ...obj5
  }; // let b = {foods: {...a.foods}}
  obj5New.foods.dinner = 'Soup';
  console.log(obj5New.foods.dinner, obj5.foods.dinner);
  
  //deep copy ---- let b = JSON.parse(JSON.stringify(a))
  
  