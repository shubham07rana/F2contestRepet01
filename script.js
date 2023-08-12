let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  arr.map((ele) =>{
    if(ele.profession === "developer"){
    console.log(ele);
    }
});
  //Write your code here , just console.log
}

function addData() {
  let addnew = { id: 4, name: "Shubham", age: "22", profession: "software Engineer" };
  arr.push(addnew);
	 for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
     }
  //Write your code here, just console.log
}

function removeAdmin() {
  let res = arr.filter((ele) =>{
    return ele.profession !="admin";
});

for(let i=0;i<res.length;i++){
    console.log(res[i]);
}
  //Write your code here, just console.log
}

function concatenateArray() {
  let arr2 = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
    ];

    let newarr = arr.concat(arr2);
    for(let i=0;i<newarr.length;i++){
        console.log(newarr[i]);
    }
  //Write your code here, just console.log
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}