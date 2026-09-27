class Student{
    studentName:string;
    course:string;
    studentID:number;

    constructor(name:string,id:string,rate:number){
        this.studentName=name;
        this.course=id;
        this.studentID=rate;
    }

    displayDetails(){
        console.log(`Student name is ${this.studentName}`);
        console.log(`Seleccted course is ${this.course}`);
        console.log(`Student ID is ${this.studentID}` );
    }
}

const studentInfo1 = new Student("Hari","Seleniu with Java",123456);
 studentInfo1.displayDetails();
 const studentInfo2 = new Student("Geetha","Playwright with Typescript",654321);
 studentInfo2.displayDetails();
 
 