let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
     arr.forEach(arr => {
    if (arr.profession === "developer") {
      console.log(`ID: ${arr.id}, Name: ${arr.name}, Age: ${arr.age} , Profession: ${arr.profession}`);
    }
  });
  }
  
  function addData() {
    //Write your code here, just console.log
    let arr2=[{id:4, name:'susan', age:20, profession:'intern'}];
    arr.push(arr2);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(employee => employee.profession !== 'admin');
     console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let Array2=[{id:5, name:'sushi', age:25, profession:'SDE'} ,
    {id:6, name:'Jonny', age:30, profession:'developer'},
    {id:7, name:'Smith', age:18, profession:'intern'}];
    const newArray = arr.concat(Array2);
    console.log(newArray);
}
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }