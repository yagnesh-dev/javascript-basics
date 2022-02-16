const convertArrayToObjects = (array,key) => {
    const initialValue = {};
    return array.reduce((obj, item)=>{
        return {
            ...obj,
            [item[key]] : item,
        };
    },initialValue);
}
const input = [
    { id: 111, name: 'John', age: 29 },
    { id: 112, name: 'Sarah', age: 25 },
    { id: 122, name: 'Kate', age: 22 },
    { id: 123, name: 'Tom', age: 21 },
    { id: 125, name: 'Emma', age: 24 },
  ];
console.log(convertArrayToObjects(input,'id'));