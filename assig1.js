var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

keys1=Object.keys(obj1);
keys2=Object.keys(obj2);
let k=1;

if(keys1.length==keys2.length){
    for(let k1 in keys1){
        if(!keys2.includes(k1)){
            k=0;
            break
        }
    }
}

if(k){
  console.log("Objects don't have same properties");
}
else{
    console.log("Objects have same properties")
}

