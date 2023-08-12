let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


function PrintDeveloperbyMap() {
  arr.map((ele) =>{
      if(ele.profession === "developer"){
      console.log(ele);
      }
  });
  
}



function PrintDeveloperbyForEach() {
  arr.forEach((ele) =>{
      if(ele.profession === "developer"){
           console.log(ele);
      }
  });
 
}



function addData() {
  let addnew = { id: 4, name: "Shubham", age: "22", profession: "software Engineer" };
arr.push(addnew);
 for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
   }

 }

 

function removeAdmin() {
  let res = arr.filter((ele) =>{
      return ele.profession !="admin";
  });
  
  for(let i=0;i<res.length;i++){
      console.log(res[i]);
  }
}



function concatenateArray() {
  let arr2 = [
  { id: 5, name: "Ankit", age: "24", profession: "software Engineer" },
  { id: 6, name: "Shubham", age: "25", profession: "Chef" },
  { id: 7, name: "Raja", age: "23", profession: "Developer" },
  ];

  let newarr = arr.concat(arr2);
  for(let i=0;i<newarr.length;i++){
      console.log(newarr[i]);
  }
}