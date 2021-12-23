// // variable declaration
// let hello:string = "world";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    User.prototype.changeUnchangeableName = function () {
        //  this.unchangeableName = "foo";
        // gives error because ofthe readonly attribute
    };
    User.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var user = new User("azeez", "lesson");
// console.log(user)
// inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
// generics
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var Users = {
    name: "azeez"
};
var result = addId(user);
// console.log(result, result)
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// }
// console.log(statuses.inProgress)
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
console.log(Status.InProgress);
