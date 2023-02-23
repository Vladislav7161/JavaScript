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


//7
 const num = [3,7,9]
 function addItem(){
   
 }
 num.unshift(4,3,9)
 num.push(8,7,6)
 console.log(num)
 
 
 //9
function fullName(fisrtName, lastName) {
    return fisrtName + " " + lastName
}
const myName = fullName("Vlad", "Kalnin")
console.log(myName)
