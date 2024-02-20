// 1.)Create your own resume in jason format
// var resume={
//     "Name":"Nithish kumar",
//     "Number":7010765083,
//     "age":23,
//     "Address":"No .06 f01",
//     "Education":"B.SC Computer Science",
//     "D.O.B":"15-03-2001",
//     "Skills":"html,css,bootstrap,JS,reactJs,AngularJS,ReactNative,mysql,mangoDb,postSql,",
//     "Father Name":"Muru",
//     "Mother Name":"Sel"
// }
// var resume1=JSON.stringify(resume);

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