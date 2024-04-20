// object => {} => {key: value}
var student = {
    fullname: "aniq",
    lastname: "shiekh",
    class: 11,
    rollno: 235,
    faculty: "comp science",
    subjects: ["urdu", "maths", "islamiat", "computer"]
};
var student1 = {
    fullname: "aniq",
    lastname: "shiekh",
    class: 11,
    rollno: 235,
    faculty: "comp science",
    subjects: ["urdu", "maths", "islamiat", "computer"]
};
var student2 = {
    fullname: "aniq",
    lastname: "shiekh",
    class: 11,
    rollno: 235,
    faculty: "comp science",
    subjects: ["urdu", "maths", "islamiat", "computer"]
};
var students = [student, student1, student2];
console.log(students);
//object for paricular type and value
console.log(student.fullname);
console.log(student2.subjects[3]);
