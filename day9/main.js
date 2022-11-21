// var func = (function(i=0){
//     console.log("hello"+i);
//     if(i<10) {
//         return func(i+1);
//     }
//     else console.log("================");
// });


// var func = (function(i=0){
//     console.log("hello"+i);
//     if(i<10) {
//         return function(){i++; return i};
//     }
//     else console.log("================");
// });
// setInterval(func,1000);
// func();



// PROMISES ==============================

// var promise1 = new Promise(function(resolve,reject){
//     var a = 10;
//     var b = 20;
//     if((a*b)%10 == 0){
//         reject(a*b);
//     }
//     else resolve(a*b);
// });


// promise1.then(
//     function resolve(){console.log("resolved");},
//     function reject(){ console.log("rejected");}
// );

// var promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve("done!"),0.1);
//     // return;
//     reject(new Error("error msg"));
//     // var x=0;
//     // if(x ===0) reject(new Error("some error occured"));
// });

// promise1.then(
//     resolve= (msg) => {console.log(msg);},
//     reject= (msg)=>{ console.log(msg)}
// )

// if only accept a promise
// promise1.then(alert) ;

// if only error handling
// promise1.then(null,alert);
// promise1.catch(alert);


// const promise2 = new Promise((resolve,reject) => {
//     let x =1;
//     if(x === 0) reject("value is zero");
//     else resolve("success!");
// })
// // for muliple accepts, multiple then
// .then((result) => {
//     console.log(result);
//     // console.log(promise2);
//     return "success";
// })
// .then((val) => {
//     console.log("another res"+val);
// })
// .then((val) => {
//     console.log("another res"+val);
// })
// .then((val) => {
//     console.log("another res"+val);
// })
// .then((val) => {
//     console.log("another res"+val);
//     throw("error from last 'then'");
// })
// .catch((error) => {
//     console.log(error);
// })
// .catch((error) => {
//     console.log(error);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally((x) => {
//     console.log("cleaning up.... " + x);
// })


// ==================================================================================
// function mouseClick(){
//     console.log("mouse click!!");
//     const x =new Promise((resolve,reject) => {
//         const userInput = document.getElementById("input-box");
//         if(userInput == "asd"){
//             reject("no user input");
//         }
//         else resolve(userInput.value);
//     })
//     .then((res) =>{
//         document.getElementById("result").innerHTML = res; 
//         console.log("successful submission !");
//     })
//     .catch((error) =>{
//         document.getElementById("result").innerHTML = error;
//     })
//     .finally(() => {
//         setTimeout(()=>{
//             document.getElementById("input-box").value ="";
            // document.getElementById("result").innerHTML = "";
//             // console.log("successfu")
//         }, 1000);
//     });
// }


// ===========================================
// SETTLED PROMISE HANDLER

// const promise = new Promise(resolve=>{
//     resolve("done!");
// });
// promise.then(()=>{
//     console.log("promise settled !");
// })


// ===========================================
// AYNC/ AWAIT
const x = async () => {
    return false;
}

async function func(){
    // console.log("waiting...")
    return true;
    
}
// val =await func;
// console.log(val);

//  async function calctmp () {
//     console.log("calc starting ....");
//     const add = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("add");
//         },1000);
//     });
//     const minus = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("minus");
//         },3000);
//     });
// }
// calctmp();

const calc = async () => {
    console.log("calc starting ....");
    const add = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("add");
            resolve("Add");
        },1000);
    });
    const minus = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("minus");
            resolve("minus");
        },3000);
    })
    const b = await minus;
    // const b = minus;
    const a = add;
    console.log(a);
    console.log(b);
    return [a,b];
}

// console.log(calc());

async function main(){
    const a = await calc();
    const b=  await calc();
}

let val= calc();
console.log(val);
console.log("printinh.....");
