const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");




const convert = () => {
	
	//if input is empty
  if(input.value === "") {
  output.innerHTML = "Please enter a valid number"
  output.classList.remove('hidden');
  } 
  //if input is bellow 0
  else if(input.value <= 0){
  output.innerHTML = "Please enter a number greater than or equal to 1";
  output.classList.remove('hidden');
  } 
  //if imput is above 4000
  else if(input.value > 4000) {
  output.innerHTML = "Please enter a number less than or equal to 3999";
  output.classList.remove('hidden');
  }
  //if all of the above is not true convert number 
  else {
  let num = parseInt(input.value);
  const conversion = (numbers) => {
  
  const ref = [
   ["M", 1000],
   ["CM", 900],
   ["D", 500],
   ["CD", 400],
   ["C", 100],
   ["XC", 90],
   ["L", 50],
   ["XL", 40],
   ["X", 10],
   ["IX", 9],
   ["V", 5],
   ["IV", 4],
   ["I", 1]
  ]; //array for the for loop
  let result = []; //stroing results from the for each loop
  
//for each loop going through reff arr comparing number with second obj in array if number bigger then arr1, pushing letter.
     ref.forEach((arr) => {  
      	while(num >= arr[1]) {
      		result.push(arr[0]);
      		num -= arr[1];
    		}
        output.classList.remove('hidden');
    		return output.innerHTML = `${result.join("")}`;
    });
 };
	conversion(num);	
}        
};



button.addEventListener("click", () => {convert()});
