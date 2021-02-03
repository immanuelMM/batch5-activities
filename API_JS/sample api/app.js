console.log("start")


function loginuser(name, password){
 return new Promise((success , fail) =>{
  setTimeout(()=>{
    console.log("user AUTh")
    success ( {name: "mawe" , email:"iman@yahoo"});
  },3000)
 })
}

function getvlogs(email){
 return new Promise((success , fail) =>{
  setTimeout(()=>{
    console.log("get vlogs")
    success(["vlog1" , "vlog2" , "vlog3"])
  },3000)
 })
}

function getcomment(vlog){
  return new Promise((success, fail) => {
    setTimeout(()=>{
      success("fsdfdsfdsf fd sfdsfds fdssfds ds")
    },3000)
  })
}
// old verssion async
// loginuser("iman" , "password" , (email)=>{
//   console.log(email);
//     getvlogs(email.email , (vlogs)=>{
//       console.log(vlogs);
//       getcomment(vlogs[0] , (msg)=>{
//         console.log(msg)
//       })
//     })
// })
// version Promise 
// loginuser("mawe" , "mawe@")
// .then((user) => getvlogs(user.email))
// .then((vlogs) => getcomment(vlogs[0]))
// .then((msg) => {console.log(msg)})


// async and await
async function display(){
  let user = await loginuser("mawe" , "mawe@");
  console.log(user)
  let vlogs = await getvlogs(user.email);
  console.log(vlogs)
  let msg = await getcomment(vlogs[0]);
  console.log(msg);
}

display();

console.log("end")