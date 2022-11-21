var s = "hui hui hui byee";



console.log("String length",s.length);
console.log("String char at given position",s.charAt(12));
console.log("String char code at given position",s.charCodeAt(-2));
console.log("String length",s.concat(" i love"));
console.log("String length",s.concat(" i use ","youtube"));

console.log("String index of =", s.indexOf("byee"));
console.log("String last index of =", s.lastIndexOf("hui"));
console.log("String index of =", s.lastIndexOf("hui",4));

console.log("string lowercase", s.toLowerCase());
console.log("string uppercase", s.toUpperCase());

console.log("string substr", s.substr(3,9));
console.log("string substring", s.substring(3,5));
console.log("string slice", s.slice(12,15));

console.log("string uppercase", s.replace("hui","boi"));
console.log("string uppercase", s.replace(/hui/g,"jio"));
console.log("string uppercase", s.replaceAll("byee","sayonara !"));
var ss = "my name Name is khan";

console.log("String split",ss.split(" "));

console.log("String search index of =", ss.search("name"));
console.log("String match index of =", ss.match(/name/));
console.log("String index of =", ss.match(/name/g));
console.log("String index of =", ss.match(/name/gi));
console.log("String index of =", ss.matchAll("name"));
console.log("String index of =", ss.matchAll("name"));

var s2 = "   hii i m whitespace    ";
console.log("String trimstart of =", s2.trimStart());
console.log("String trimend of =", s2.trimEnd());
console.log("String trim of =", s2.trim());


console.log("String padStart of =", s2.padStart(50,"x"));
console.log("String padENd of =", s2.padEnd(50,"y"));

// ===========================================================


let x = [123, 13,132, 34];
// x.sort();
x.sort(
        function(a,b){ return a-b}
    )
;
    console.log("x"+x);
// x.sort();

// for loop
console.log("for loop - ");
for(i=0; i <x.length; i++){
    console.log(x[i]);
}
var arr = ["i", "m", "the","solo","leveller"];
function adder(value,index,arr){
    console.log(value+ " "+index);
}
console.log("for each loop -")
arr.forEach(adder);

// mapping a array on another array;
var arr2 = [1,2,3,4];
function mapFunction(value,index,arr){
    // return value*2;
    return value + ' : ' + index;
}
var arr2_new = arr2.map(mapFunction);
console.log(arr2_new);


// filter array
var arr2 = [31,12,41,30];
function myFilter(value,index,arr){
    return value >20;
}
var arr2_new = arr2.filter(myFilter);
console.log(arr2_new);

// reduce array
var arr2 = [1,2,3,4];
function myReducerLR(total,value,index,arr){
    return total +value;
}
function myReducerRL(total,value,index,arr){
    return total -value;
}
var arr2_new = arr2.reduce(myReducerLR);
var arr2_new2 = arr2.reduce(myReducerRL,10);
console.log("REduced result from arr_new", arr2_new);
console.log("REduced result from arr_new with initial value", arr2_new2);

// array every function

var arr = [12 ,3 ,11, 13, 4];
function checker(value,index,array){
    return value > 100;
}
var res = arr.every(checker);
console.log(res);

// array if else condition
const num = [1,2,3,4];
for(i=0;i<num.length; i++){
    if(num[i]>3) console.log()
}

// switch case
var xy = 100;
console.log("switch case here =----");
switch(xy){
    case 1: console.log("got 1"); break;
    case 2: console.log("got 2"); break;
    case 3: case 4:
            console.log("got value 3 or 4"); break;
    default:console.log("invalid choice"); break;
}
