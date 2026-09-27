var Student = /** @class */ (function () {
    function Student(name, id, rate) {
        this.studentName = name;
        this.course = id;
        this.studentID = rate;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student name is ".concat(this.studentName));
        console.log("Seleccted course is ".concat(this.course));
        console.log("Student ID is ".concat(this.studentID));
    };
    return Student;
}());
var studentInfo1 = new Student("Hari", "Seleniu with Java", 123456);
studentInfo1.displayDetails();
var studentInfo2 = new Student("Geetha", "Playwright with Typescript", 654321);
studentInfo2.displayDetails();
