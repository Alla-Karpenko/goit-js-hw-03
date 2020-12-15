const countProps = function (obj) {
    const keys = Object.keys(obj);
    console.log(keys.length)
    return obj; 
}


console.table(countProps({})); // 0

console.table(countProps({ name: 'Mango', age: 2 })); // 2

console.table(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3





