// "use strict";
// for loop simple 
// var cars = ["supra","swift","taigo","bolero","jeep"];

// for(let i=0, len=cars.length, text="";i <len; i++){
//     console.log(cars[i]+"<br>");
// }


// console.log("==============================")
// for loop more customized
// let i=0;
// let len = cars.length;
// let text="";
// for(;i<len;){
//     console.log(cars[i]+"<br>");
//     i++;
// }

// For in loop on object
const person = {
    fname : "yash",
    "lname" : "mali",
    dob   : 22
}
var txt = "";
for(let key in person){
    txt += person[key];
}
console.log(txt);


// For in loop on array
var nums = [12, 121 ,124 ,124];
var txt = "";
for(let x in person){
    txt += nums[x];
}
console.log(txt);


console.log("================================");
var nums = [12, 123, 1234, 12345];
var txt="";
function forEveryFunction(value,index,array){
    txt += value;
}

nums.forEach(forEveryFunction);
console.log(txt);


console.log("================================");
// for of loop only for iterables, not objects
var cars = ["BMW","Volvo","Mini"];
var txt="";
for(var x of cars){
    txt += x;
}
console.log(txt);

var s = "why i am here even here?";
var txt ="";
for(var c of s){ txt += c;}
console.log(txt);



// ==================================
// var persons ={
//     fname : "yash",
//     lnmae : "mali"
// }
// for(let x of persons){
//     console.log(x);
// }

// while loop ===================
var i=0;
while(i<10){
    console.log("hii"+i);
    i++;
}

var cars = ["BMW","Volvo",null,"Mini"];
var i=0;
var txt="";
while(cars[i]){
    txt+=cars[i];
    i++;
}
console.log("while loop array end",txt);

//====================


// break statement 
for(var i=0;i<10;i++){
    if(i===3) {break;}
    txt+= "the number is "+i+" <br>";
}
console.log(txt);

// continue statement 
txt="";
for(var i=0;i<5;i++){
    if(i===3) {continue;}
    txt+= "num: "+i+"\t";
}
console.log(txt);

// DAtes ==============

var d= new Date();
console.log(d, typeof(d));
var d= new Date("2022-03-23");
console.log(d, typeof(d));
var d= new Date(2023,1,2,13,30);
console.log(d, typeof(d));


console.log("millisecond not here",new Date(2014));

console.log(new Date(99,11,24));
console.log(new Date(9,11,24));
console.log("adds given milli-seconds to zero time",new Date(1000000));
console.log("subtracts given milli-seconds to zero time",new Date(-1000000));

// DAte methods
var d=  new Date();
var d2 = d.toString();
console.log("complete stringed date ->",d2,typeof(d2));
console.log("get only day,month,date year ->",d.toDateString());
console.log("date stringed with UTC format->",d.toUTCString());
console.log("date stringed with ISO format->",d.toISOString());

console.log("================================");

var d = new Date();
console.log("DAte is -", d);
console.log("Full Year now -", d.getFullYear());
console.log("month is -", d.getMonth());
console.log(" get date -", d.getDate());
console.log("get time -", d.getTime());
console.log("get day -", d.getDay());
console.log("get hours -", d.getHours());
console.log("get minutes -", d.getMinutes());

console.log("milli-seconds since 1-1-1979",Date.now())

// =====================================
console.log("\n\n TimezoneOffset");
var diff = d.getTimezoneOffset();
console.log(diff);

// =====================================

console.log("==============================================");
var d = new Date();
d.setDate(23)
console.log(d);
d.setMonth(2);
console.log(d.getMonth());
d.setFullYear(2012,11,12);
console.log(d.toISOString());
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.getHours(),d.getMinutes() , d.getSeconds());
d.setDate(d.getDate()+50)
console.log(d.getDate(), " increasing date by 50", d);

d.setHours(22);
console.log("after setting hours in custom date --",d.toLocaleTimeString());


// ==============================================
var txt = "";
var today = new Date();
var new_day = new Date();
// new_day.setFullYear(2023,10,11);
new_day.setHours(8);
if(new_day > today){
    console.log(today,"damn that's in the future !!", new_day);
}
else {
    console.log("Bruh.. you are old!")
}

// ==============================================
d = new Date();
d.setFullYear(1900,0,1);
d.setHours(12,12,12,12);
console.log(d.toLocaleString());

// ===========================================
d = new Date("2020/1/20");
console.log(d);

console.log(Math.floor(Math.random()*10));

console.log(Boolean(10>20));

console.log(" ========");
console.log(10>=20);
console.log(1<20);
console.log(10 === 20);
console.log("12" == 12);
console.log("12" === 12);



// ===========================
var sets = new Set([1,2,3,4,1]);
console.log(sets);
sets.add('3');
sets.delete(3);
console.log(sets);
console.log(sets.has(2));
console.log(sets.size);
txt = "";

function setfunc(value,index,sets){
    txt += value;
}

sets.forEach(setfunc);
console.log(txt);
console.log(sets.values().next());


// MAP ===================
var map = new Map([
    ['name','yash'],
    ['month','sep']
]);
console.log(map.has("month"));
console.log(map.get("name"));
map.set("lang","eng");
console.log(map.entries()[0]);
// console.log(map.len());
map.set("name",map.get("name")+" mali");
console.log(map.keys());
console.log(map.values());
map.clear();
console.log(map.size);

// =============================
// REgex 

var pattern = /\bo/gi;
console.log(pattern.test("How are you?"));

console.log(/\bu/gi.exec("youtube is with us!"));

// error handling 
try{
    // console.logg(1/0);
    throw "you fkked up!"
}
catch(error){
    console.log("caught an error");
    // sleep(100);
}
finally{
    // location.href = "https://www.google.com/";
    console.log("go ahead !");
}

// =================================
var p = {
    a : new Date(),
    b : /12/gi,
    check : function(){
        return this.b.exec(this.a.toString());
}};

console.log(p.check());


const table= {
    name : "yash",
    dob  : 22,
    major: "Computer Science",
    getName: function(){
        return this.name;
    },
    getMajor: function(){
        return this.major;
    }
}

console.log(table);
console.log(table.getName(), table.getMajor());
console.log(table.dob);


function mf(){
    return this;
}

// console.log(mf());

var obj = {
    "name" : "yash",
    "age" : 22,
    "city" : "udr"
};
var json = JSON.stringify(obj);
console.log(json);
var obj_new = JSON.parse(json);
console.log(obj_new);

// =============================
// storing data as json in local storage
// localStorage.setItem("json_test_obj",json);

// retrieving
// var txt  = localStorage.getItem("json_test_obj");
console.log(JSON.parse(txt));


var p1 = {
    fname : function(){
        return this.name + "!!";
    }
}
var p2 = {
    name:"ayush",
    name2:"ram"
}
console.log(p1.fname.call(p2));
var tmp = p1.fname.bind(p2);
console.log(tmp);



function tmp(){
    return this.fname + " : " + this.lname;
}


var personp = {
    fname : "yash",
    lname : "mali",
    // getName : function(){ return this.fname + ":" + this.lname;}
    getName : function(a,b){ return a + ":" +b;}
}

var unboundedName = personp.getName;
console.log("Unbounded name =====",unboundedName);
// console.log(personp.op.bind(tmp));
var boundedName = unboundedName.bind(personp);
console.log("bounded name =====",boundedName("jack","jones"));


var p1 = {
    r1 : function(){
        return this.a+this.b;
    },
    r2 : function(a,b){
        return a+b;
    }   
}
var p2 ={
    a : 1,
    b :2
}
console.log("Simple call - ",p1.r1.call(p2));
console.log("Call with arguemnts ",p1.r2.call(p2,10,10));
console.log("Simple apply- ",p1.r1.apply(p2));
console.log("Apply with different parameters",p1.r2.apply(p2,[3,4]));


var p1=  {
    f : function(){
        return this.a + this.b;
    },
    f2: function(x,y){
        return x + y;
    }
}

var p2 = {
    a : 10,
    b : 20
}
var tmpFunction1 = p1.f.bind(p2); 
var tmpFunction2 = p1.f2.bind();
console.log("normal 2 objects function binding..",tmpFunction1());
console.log("arguemnt based 1 function binding outside the object...",tmpFunction2(100,200)); 