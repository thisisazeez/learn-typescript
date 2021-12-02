// // variable declaration
// let hello:string = "world";
// // functions
// const getFullName = (name: string, surname: string) : string => {
//     return name + " " + surname;
// };
// console.log(getFullName("abdul", "azeez"));
// // objects 
// // intefaces
// interface UserInterface{
//     name: string;
//     age?:number;
//     getMessage(): string;
// }
// const user: UserInterface = {
//     name: "Azeez",
//     age:30,
//     getMessage(){
//         return "Hello" + name;
//     }
// };
// const user2 : UserInterface = {
//     name: "Jack",
//     getMessage(){
//         return "Welcome" + name;
//     }
// };
// console.log(user.getMessage())
// // union operator 
// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
// interface  User{
//     id:ID;
//     name:string;
//     surname:string;
// }
// const popularTags: PopularTag[] = ['dragon', 'coffe'];
// let username: string = "alex";
// let pageName: string | number = "1";
// let users: User | null = null;
/// void
var doSomething = function () {
    console.log("DoSomething");
};
var foo = null;
