let checkNum = prompt("Введите число от 2 до 1000", 'от 2 до 1000');
if (checkNum>1000||checkNum<2)
alert("Данные неверны!");

function primeNumber() {
  
  for (let i = 2; i<checkNum - 1; i++) {
    
    if (checkNum%i == 0) {
      console.log("checkNum"+" не является простым числом");
      return false;
      
   }
     console.log("checkNum"+"  является простым числом");
   return true;
       
   }
   } 
   primeNumber();