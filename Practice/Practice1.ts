//to assign type to object
interface jobtype{
    job: string;
    salary:number;
    area: string;
    attended:boolean;
}
type infotype={
    name:string;
    rollno:number;
    address:string;
    email:string
    faculty:string;
    phone:number;
   worker: boolean;
   jobinfo:jobtype;
};

let info:infotype={
    name:"muhammad",
    rollno:27,
    address:"abs road karachi",
    email:"XYZ @gmail.com",
    faculty:"science",
    phone:923627381681,
    worker:true,
    jobinfo:{
        job:"officer",
        salary:92000,
        area:"karachui central",
        attended:true,
    }
};
console.log(info.jobinfo.area)