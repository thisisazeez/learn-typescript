
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
// const doSomething = ():void  => {
//     console.log("DoSomething");
// };

// let foo: void = undefined;

// // any

// let boo: any = "foo";

// // never 
// const doSom = (): never => {
//     throw "never";
// };

// // unknown

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// // let s2: string = vUnknown; return error cause u cant assign 
// let s2: string = vUnknown as string;

// let pageNumber: string = "1";
// let numericPageNumber: number = 1;

// working with dom
// let page:any = "1";
// let pageNumber = page as string;


// const someElement = document.querySelector(".foo");

// someElement.addEventListener('blur', (event) => {
//     const target = event.target as HTMLInputElement
//     console.log('event', target.value)
// })


// classes in typescript

interface UserInterface{
    getFullname(): string
}
class User  implements UserInterface{
    private firstName: string
    private lastName: string
    readonly unchangeableName: string
    static readonly maxAge = 50
     constructor(firstName: string, lastName: string){
         this.firstName = firstName
         this.lastName = lastName
         this.unchangeableName = firstName
     }

     changeUnchangeableName(): void{
        //  this.unchangeableName = "foo";
        // gives error because ofthe readonly attribute
     }
    getFullname(): string {
        return this.firstName + " " + this.lastName
    }
}
const user = new User("azeez", "lesson")

// console.log(user)

// inheritance
class Admin extends User{
    private editor: string

    setEditor(editor: string): void{
        this.editor = editor
    }
    getEditor(): string{
        return this.editor
    }
}


// generics

const addId = <T>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
};

const Users =  {
    name: "azeez",
};

const result = addId(user)
// console.log(result, result)


// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// }

// console.log(statuses.inProgress)

enum Status {
    NotStarted,
    InProgress,
    Done
}

console.log(Status.InProgress)