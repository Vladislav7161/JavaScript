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
