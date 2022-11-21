const obj = {
    f : "asd",
    l : "qwe",
    q : ()=>{
        return ()=>{}
    }
};
console.log(obj.q());