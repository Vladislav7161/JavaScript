//1
 function removeDuplicates(array) {
     return Array.from(new Set(array));
   }

 const array = [5,3,4,5,6,7,3]
 const newArray = removeDuplicates(array)
 console.log(newArray)


//2
 function createArray(start, end) {
     const range = [];
  
     for (let i = start; i <= end; i++) {
       range.push(i);
     }
  
     return range;
  }

 const arr = createArray(2,10)
 console.log(arr)



// 3
const newSorted = (names) => names.replace(/\s+/g, '').split(',').sort().join(', ')
const names = "Alex,    Orysia, Misha,    Ira     , Paul";
console.log(newSorted(names))

//4
 const people = [
   { name: "Misha Klym", age: 2}, 
   { name: "Sam Winchester", age: 5 },  
   { name: "Jordan Peterson", age: 43 },  
   { name: "John Wayne", age: 17 },  
   { name: "Stan Lee", age: 22 }
   ]
   const person = people.filter((person)=>{
   return person.age >= 18
   })
   console.log(person)


//5
 function findNumbersByLength(numbers, length) {
     let count = 0;
  
     for (let i = 0; i < numbers.length; i++) {
       if (numbers[i].toString().length === length) {
         count++;
       }
     }
       return count;
   }
  
   const numbers = [1,2,55,3,100, 333, 9999];
   const twoDigitCount = findNumbersByLength(numbers, 2);
   const threeDigitCount = findNumbersByLength(numbers, 3);
   const fourDigitCount = findNumbersByLength(numbers, 4);
  
   console.log(twoDigitCount);
   console.log(threeDigitCount);
   console.log(fourDigitCount);



//7
 const num = [3,7,9]
 function addItem(){
   
 }
 num.unshift(4,3,9)
 num.push(8,7,6)
 console.log(num)
 
  //8  
 function rearrangeArray(array) {
     const evenNumbers = array.filter(num => num % 2 === 0);
     const oddNumbers = array.filter(num => num % 2 !== 0);
     const resultArray = [];
  
     for (let i = 0, j = 0, k = 0; i < array.length; i++) {
       if (i % 2 === 0) {
         resultArray[i] = evenNumbers[j];
         j++;
       } else {
         resultArray[i] = oddNumbers[k];
         k++;
       }
     }
       return resultArray;
   }

   const myArray = [5, 2, 4, 7, 0, 8, 9, 10];
 const rearrangedArray = rearrangeArray(myArray);
 console.log(rearrangedArray);
 
 
 //9
function fullName(fisrtName, lastName) {
    return fisrtName + " " + lastName
}
const myName = fullName("Vlad", "Kalnin")
console.log(myName)
