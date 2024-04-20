// object => {} => {key: value}
let student={
    fullname:"aniq",
    lastname:"shiekh",
    class:11,
    rollno:235,
    faculty:["comp science", true],
    subjects:["urdu","maths","islamiat","computer","english"]
}
let student1={
    fullname:"m.aniq",
    lastname:"shiekh",
    class:9,
    rollno:135,
    faculty:["comp science",true],
    subjects:["urdu","maths","computer"]
}
let student2 ={
    fullname:"anas",
    lastname:"shiekh",
    class:8,
    rollno:735,
    faculty:["comp science",true],
    subjects:["maths","islamiat","computer"]
}
let students=[student,student1,student2]
console.log(students)
//object for paricular type and value
console.log(student.fullname)
console.log(student2.subjects[3])