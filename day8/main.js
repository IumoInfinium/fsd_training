// // DOM Document Object Model
// console.log(document);

// let where  = document.getElementById("item");
// let x = document.createElement("div");
// let y = document.createElement("p");
// y.style.backgroundColor = "red";
// const txt = document.createTextNode("NEW text");
// y.appendChild(txt);
// x.appendChild(y);

// where.appendChild(x);
// // const btn = document.createElement("button");
// // btn.innerHTML = "Hello Button";
// // document.body.appendChild(btn);
// console.log("done ====");

// ==================================
var x = "YASH";

function name(){
    var x =" within function";
    console.log(x);
    var x = "closure";
    return function(){
        console.log(x);
    }
}
console.log("old value before closure ",x);
var y = name();
y();
// console.log("from new movable closure function",);
console.log("from new movable closure function",x);
// ================================================================
console.log("=====================================hello")

const add =( function(){
    let counter =0;
    return function(){counter +=1; return counter;}
})();

var new_adder = add;
// console.log(new_adder);
console.log(add(),new_adder());
add();
add();
console.log(new_adder());


// CALLBACK Function ===================================

console.log("CAllback function starts here =======================")
function display(num){
    console.log("display function got called !! ",num);
}
function calc(num1,num2,placeholder){
    console.log("calling function ");
    placeholder(num1+num2);
}
calc(10,20,display)

console.log("----------------------------------------------");


setTimeout( ()=>{
    console.log("hello, it was printed after delay of 5sec.");
},5000);
console.log("in sequence but still printed before sleep!");


// setInterval( ()=>{
//     console.log("hello, it was printed after every 2sec.");
// },100);
// console.log("in sequence but still printed before sleep!");

// tmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// tmp = "|==================|";

// setInterval( ()=>{
//     console.log(tmp);
//     tmp+= tmp[0];
//     tmp = tmp.substr(1);
// },10);


// ============================

var name = (lastname,callback) =>{
    var fullname = "yash" + lastname;
    callback(fullname);
}

name("mali",(user)=>{
    console.log(user);
    name("new",(tmp)=>{
        console.log(tmp + "asdasddasdd");
    });
})

//This keyword
console.log("Using this keyword globally:") ;
var x="hey";
console.log(this);