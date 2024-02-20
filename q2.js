//2.)iterate the reume jason using for, for of,for in, froeach

let resume=[{
    "Name":"Nithish kumar",
    "Number":7010765083,
    "age":23,
    "Address":"No .06 f01",
    "DOB":"15-03-2001",
    "Father_Name":"Muru",
    "Mother_Name":"Sel"
        },{
            "Degree":"B.SC Computer Science",
            "12Th":"HSSC",
            "10Th":"SSLC",
        },
        {
        "Skills":"html,css,bootstrap,JS,reactJs,AngularJS,ReactNative,mysql,mangoDb,postSql",
        "Personal":"Less Talktive,Team player"

        }
        ];

        console.log(typeof(resume));
        let resume1=JSON.stringify(resume);
        //For loop
for(i=0;i<=resume1.length();i++){
    console.log(resume1[i]);
}
//For in
for(var i in resume){
    console.log(resume[i]);
}
//For Of
for(var i of resume){
    console.log(i);
}
//Foreach
resume.forEach(element => {
    console.log(element);
});