
// variable declaration
let hello:string = "world";


// functions
const getFullName = (name: string, surname: string) : string => {
    return name + " " + surname;
};

console.log(getFullName("abdul", "azeez"));

// objects 
// intefaces
interface User{
    name: string;
    age:number;
}
const user: User = {
    name: "Azeez",
    age:30
};

const user2 : User = {
    name: "Jack",
    age:12
};