const filterOutOdds = (...nums) => {
    let output = nums.filter(num => num % 2 === 0);
    return output;
};


const findMin = (...nums) => {
    return Math.min(...nums);
};


const mergeObjects = (obj1, obj2) => 
({...obj1, ...obj2});


const doubleAndReturnArgs = (arr, ...nums) => {
    return [...arr, ...nums.map(arg => arg * 2)];
};


const removeRandom = (item) => {
    let itemIndex = Math.floor(Math.random() * item.length);
    return [...item.slice(itemIndex + 1), ...item.slice(0, itemIndex)];
};


const extend = (arr1, arr2) => 
([...arr1, ...arr2]);


const addKeyVal = (obj, key, val) =>{
    let output = {...obj};
    output[key] = val;
    return output;
};


const removeKey = (obj, key) =>{
    let output = {...obj};
    delete output[key];
    return output;
};


const combine = (obj1, obj2) =>{
    return {...obj1, ...obj2};
};


const update = (obj, key, val) =>{
    let output = {...obj};
    output[key] = val;
    return output;
};
