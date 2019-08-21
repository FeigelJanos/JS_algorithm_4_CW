function dirReduc(arr){

let i = 0

  do {

  switch(arr[i]+arr[i+1]){
  
    case "NORTHSOUTH":
    case "SOUTHNORTH":
    case "EASTWEST":
    case "WESTEAST":
      arr.splice(i, 2);
      i = 0;
      break;
    default:
      i++
      break;
    
    }  
} while (i < arr.length)

return arr
  
}
