

/* 1 question - 
const data = [-6, 8, -3, 2, 14, -17, 8];
let j = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] < 0) {
    if (i != j) {
      [data[j], data[i]] = [data[i], data[j]];
    }
    j++;
     if (i - j >= 2) {
        const temp = data[i];
        for (let k = i; k > j - 1; k--) {
          data[k] = data[k - 1];
        }
        data[j] = temp;
      }
  }
}

console.log("data", data);*/


/*2nd question-
    const items = [3,1, 33,0,5,12,77];
    let max = items[0];
    let smax;
    let tmax;
    for (let i=0; i< items.length; i++){
    if(items[i] > max) {
        
        smax = max;
        max = items[i];
    }
    if (items[i] < max && items[i] > smax) {
        tmax = items[i];
    }
    }
    console.log("max element", max, smax, tmax); */


 /* 3rd Question-

    const array = [
    "hot Drinks",
    "cOld drinks",
    "Hot Drinks",
    "Tea",
    "teA"
    ];
    // output - showuld be unique key and Capitalize letter

    console.log([... new Set(numbers)]);
    const newArr = array.map((item) => item.split(" ").map((data) => data[0].toUpperCase() + data.slice(1).toLowerCase()).join(" "));
    console.log([... new Set(newArr)]); */

/* 4th Question

    let arr = [3, 2, 5, 6, 7, 2, 5, 3, 3, 4, 8];
    const obj = {};
    const visitedArr = [];

    for (let i = 0; i < arr.length; i++) {
    for (j = i+1; j < arr.length; j++) {
        if (arr[i] === arr[j] && visitedArr.indexOf(arr[i]) === -1) {
        obj[arr[i]] = (obj[arr[i]] || 1) + 1;


        }
    }
    visitedArr.push(arr[i]);

    }

    console.log(obj); */

/* 5th Question

        let arr = [3, 2, 5, 6, 7, 2, 5, 3, 3, 4, 8];
        const obj = {};
        const visitedArr = [];

        for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] === arr[j] && visitedArr.indexOf(arr[i]) === -1) {
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;


            }
        }
        visitedArr.push(arr[i]);


        }

        console.log(obj); 
        
        //2nd Approach 
                    let counter = array => {
            return array.reduce((total, letter) => {
                total[letter] ? total[letter]++ : total[letter] = 1;
                return total;
            }, {});
            };

            console.log(counter([1,2,3,3,3,4]));

        */


/* 6th Question
            const counter = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})

            console.log(
            counter("hello") // {h: 1, e: 1, l: 2, o: 1}
            ) 
*/


/* 7th Question
                function binarySearch(array, input, min , max){

                let mid = Math.floor((min + max) / 2);
                console.log("fffff",mid);
                if( input === array[mid]){
                    return true;
                } 
                if ( min <= max){
                if( input > array[mid]){
                    return binarySearch(array, input, mid + 1, max);
                    
                } else {
                    return binarySearch(array, input,min, mid -1);
                }
                }
                return -1;
                
                }

                const array = [1,3,55, 66, 77];
                const ele = 99;

                let min = 0;
                let max = array.length-1;
                console.log(binarySearch(array, ele, min, max));

*/


/* 8th Question
        function StringChallenge(str) { 
        const array = ["a", "b", "c"];
        const output = [];
        for ( let i = 0; i< str.length-1; i++){
            if(str[i] === str[i+1]){
            output.push(str[i]);
            continue;
            } else {
            const data = array.filter((item) => item !== str[i] && item !==str[i+1]);
                str =  data[0] + str.slice(i+2);
                StringChallenge(str);
                
            }
            console.log(output);
        }  
        return output; 

    }

*/

/* 9th Question
        function sumArrayHashTable(arr, sum) {

        const result = [];
        const hashTable = {};

        for (let i = 0; i < arr.length; i++) {

            const S = sum - arr[i];

            if (hashTable[S] !== undefined) {
            result.push([i, hashTable[S]]);
            } else {
            hashTable[arr[i]] = i;
            }
        }

        return result;
        }

        console.log(sumArrayHashTable([5, 2, 6, 1, 3, 9, 0], 9));
*/


/* 10th Question
        const arry = [3, 4, 1, 4, 1];

        const result = {};

        for (let i = 0; i < arry.length; i++) {
        result[arry[i]] = (result[arry[i]] || 0) + 1;

        }
        console.log(result);
        const res = arry.filter((data) => result[data] > 1);

        console.log([...new Set(res)]) 

*/

/* 11th Question
        let string = "2[ab]c3[xyz]";
        //output- 2ababc3xyzxyzxyz

        let resultString;

        function result(string) {
        for (let i = 0; i < string.lelngth; i++) {
            let strtIndex;
            if (string[i] === "[") {
            startIndex = i;
            continue;
            } else {
            resultString = resultString + string[i];
            }
            if (string[i] === "]") {
            resultString = resultString + getString(string.slice(startIndex, i + 1));
            result(resultString);
            break;
            }

        }
        return resultString;
        }
        result(string);
        console.log(resultString);

        function getString(number, str) {
        let newStr;
        for (let i = 0; i < number; i++) {
            newStr = newStr + str;
        }
        return newStr;
        }

*/

/* 12th Question
        const arr = [1, 3, 9, 11];
        const result = []
        let value = 1;
        for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(value) !== -1) {
            value = value + 2;
            continue;
        } else {
            result.push(value);
            value = value + 2;
            continue;
        }
        }

        console.log(result) 

*/

/* 13th Question
        const arry1 = [1, 2, 3, [4, [5]],
        [6],
        [
            [7]
        ]
        ];
        //[1,2,3,4,5,6,7]
        const resultt = [];

        function checkArray(array) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== "number") {
            checkArray(array[i]);
            } else {
            resultt.push(array[i]);
            }
        }
        }

        checkArray(arry1);
        console.log(resultt); 
*/

/* 14th Question
        const str = "abcd";
        let output = str[0] + "-";
        for (let i = 1; i <= str.length; i++) {
        for (let j = 0; j <=i; j++) {
        if(str[i]){
            if (j === 0) {
            console.log(str[i])
            output = output + "-" + str[i].toUpperCase();
            } else {
            output = output + str[i];
            }
        }
        }
        }

        console.log(output);

*/