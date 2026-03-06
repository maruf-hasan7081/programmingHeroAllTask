let person={
    name:"John",
    age:30,
    city:"New York"


}
let json = JSON.stringify(person);
console.log(json);  // converting object to json

let namjson=JSON.parse(json);
console.log(namjson); // converting json to object
