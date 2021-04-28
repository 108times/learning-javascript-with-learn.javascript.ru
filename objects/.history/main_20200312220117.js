

let salaries = {
  John : 100,
  Ann  : 160,
  Pete : 130,
}
let sum = 0;
for (key in salaries) {
  sum += salaries[key];
}



let menu = {
  width  : 200,
  height : 300,
  title  : "My menu"
}

let multiplyNumber = (obj) =>{

  for (property in obj) {
    if(typeof(obj[property]) === 'number') {
      obj[property] *= 2;
      console.log(obj[property]);
    }
  }
}

alert(multiplyNumber(menu));